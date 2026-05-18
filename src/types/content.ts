// 文章 frontmatter 中的基础元数据。
export interface PostMeta {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: string;
}

// 页面真正使用的完整文章结构。
export interface Post extends PostMeta {
  slug: string;
  content: string;
  html: string;
}

// 项目卡片与项目列表复用的数据结构。
export interface Project {
  name: string;
  description: string;
  tech: string[];
  href: string;
  featured?: boolean;
}
