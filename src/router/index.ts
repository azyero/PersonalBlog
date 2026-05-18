import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../pages/AboutPage.vue';
import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import PostDetailPage from '../pages/PostDetailPage.vue';
import PostsPage from '../pages/PostsPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import { setPageMeta } from '../lib/seo';

// 应用路由表：集中定义页面组件与基础 SEO 信息。
const router = createRouter({
  history: createWebHistory(),
  // 页面切换后统一回到顶部。
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: '小奶牛 | 个人博客',
        description: '记录技术、阅读、项目和日常观察的个人博客。',
      },
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsPage,
      meta: {
        title: '文章',
        description: '按时间倒序整理的全部文章。',
      },
    },
    {
      path: '/posts/:slug',
      name: 'post-detail',
      component: PostDetailPage,
      meta: {
        title: '文章详情',
        description: '文章详情页面。',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
      meta: {
        title: '项目',
        description: '精选项目、工具和作品记录。',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: '关于',
        description: '个人介绍、写作主题和联系方式。',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
      meta: {
        title: '页面未找到',
        description: '你访问的页面不存在。',
      },
    },
  ],
});

// 每次完成导航后，根据当前路由更新页面标题与摘要。
router.afterEach((to) => {
  if (typeof to.meta.title === 'string') {
    setPageMeta(to.meta.title, typeof to.meta.description === 'string' ? to.meta.description : undefined);
  }
});

export default router;
