// 未显式传入摘要时使用的默认站点描述。
const defaultDescription =
  '小奶牛个人博客。';

// 更新浏览器标题与 description 标签。
export function setPageMeta(title: string, description = defaultDescription) {
  document.title = title;

  let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.name = 'description';
    document.head.appendChild(descriptionTag);
  }

  descriptionTag.content = description;
}
