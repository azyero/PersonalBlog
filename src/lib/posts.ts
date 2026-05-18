import MarkdownIt from 'markdown-it';
import type { Post, PostMeta } from '../types/content';

// Markdown 渲染器配置，统一文章正文的解析规则。
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
}).enable('table');

// 在构建阶段一次性读取所有 Markdown 文章源文件。
const postFiles = import.meta.glob('../../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const frontmatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n?/;

// 解析 frontmatter 中的数组写法，例如 `['Vue', 'TypeScript']`。
function parseList(value: string) {
  return value
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .split(',')
    .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

// 拆分文章 frontmatter 与正文，并校验必要字段。
function parseFrontmatter(raw: string): { meta: PostMeta; content: string } {
  const match = raw.match(frontmatterPattern);
  if (!match) {
    throw new Error('Post is missing frontmatter.');
  }

  const frontmatter = match[1];
  const content = raw.slice(match[0].length).trim();
  const values = new Map<string, string | string[]>();

  for (const line of frontmatter.split('\n')) {
    const [key, ...rest] = line.split(':');
    if (!key || rest.length === 0) continue;

    const value = rest.join(':').trim();
    values.set(
      key.trim(),
      value.startsWith('[') && value.endsWith(']') ? parseList(value) : value.replace(/^['"]|['"]$/g, ''),
    );
  }

  const title = values.get('title');
  const date = values.get('date');
  const summary = values.get('summary');
  const tags = values.get('tags');
  const readingTime = values.get('readingTime');

  if (
    typeof title !== 'string' ||
    typeof date !== 'string' ||
    typeof summary !== 'string' ||
    !Array.isArray(tags)
  ) {
    throw new Error(`Invalid post frontmatter for "${title || 'untitled post'}".`);
  }

  return {
    meta: {
      title,
      date,
      summary,
      tags,
      readingTime: typeof readingTime === 'string' ? readingTime : estimateReadingTime(content),
    },
    content,
  };
}

// 未提供阅读时长时，按中英文混排内容粗略估算一个默认值。
function estimateReadingTime(content: string) {
  const chineseCharacterCount = (content.match(/[\u3400-\u9fff]/g) ?? []).length;
  const latinWordCount = (content.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g) ?? []).length;
  const minutes = Math.max(1, Math.ceil(chineseCharacterCount / 500 + latinWordCount / 220));

  return `${minutes} 分钟阅读`;
}

// 从 Markdown 文件路径中提取文章 slug。
function slugFromPath(path: string) {
  return path.split('/').pop()?.replace(/\.md$/, '') ?? '';
}

// 构建站点可直接消费的文章集合，并按日期与标题稳定排序。
const posts = Object.entries(postFiles)
  .map(([path, raw]) => {
    const { meta, content } = parseFrontmatter(raw);
    return {
      ...meta,
      slug: slugFromPath(path),
      content,
      html: markdown.render(content),
    };
  })
  .sort((a, b) => {
    const dateDifference = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDifference !== 0) return dateDifference;

    return a.title.localeCompare(b.title, 'zh-CN', {
      numeric: true,
      sensitivity: 'base',
    });
  });

export function getAllPosts(): Post[] {
  return posts;
}

// 首页使用的最近文章列表。
export function getRecentPosts(limit = 3): Post[] {
  return posts.slice(0, limit);
}

// 文章详情页按 slug 查找单篇文章。
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
