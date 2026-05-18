import type { Project } from '../types/content';

// 项目页与首页精选区共同复用的项目数据源。
export const projects: Project[] = [
  {
    name: '星命思',
    description: '个人项目入口。',
    tech: ['Web 应用'],
    href: 'https://xiaonainiu.cn/xms/',
    featured: true,
  },
  {
    name: '六爻排盘',
    description: '周易占卜与六爻排盘工具。',
    tech: ['Web 应用'],
    href: 'https://xiaonainiu.cn/liuyao/',
    featured: true,
  },
];
