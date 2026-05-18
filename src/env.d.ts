/// <reference types="vite/client" />

// 声明通过 `?raw` 导入的 Markdown 文件会返回原始字符串内容。
declare module '*.md?raw' {
  const content: string;
  export default content;
}
