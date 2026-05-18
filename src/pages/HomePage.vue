<template>
  <div>
    <!-- 首页首屏：站点介绍、主行动按钮与插画。 -->
    <section class="page-shell grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
      <div>
        <p class="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-antique-600 dark:text-antique-400">
          个人日志
        </p>
        <h1 class="max-w-2xl font-serif text-5xl font-semibold leading-[1.02] text-ink-900 dark:text-paper-50 sm:text-6xl lg:text-7xl">
          个人博客，手记
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-8 text-ink-500 dark:text-paper-100/70">
          这里记录技术实践、读书笔记、项目复盘和日常观察。
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <RouterLink class="focus-ring inline-flex items-center justify-center rounded-full bg-olive-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-olive-700" to="/posts">
            开始阅读
          </RouterLink>
          <RouterLink class="focus-ring inline-flex items-center justify-center rounded-full border border-antique-500/20 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-antique-500/40 hover:bg-white/40 dark:text-paper-100 dark:hover:bg-white/[0.06]" to="/projects">
            查看项目
          </RouterLink>
        </div>
      </div>

      <HeroIllustration />
    </section>

    <!-- 最近文章预览。 -->
    <section class="page-shell py-12">
      <div class="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-antique-600 dark:text-antique-400">最新写作</p>
          <h2 class="mt-2 font-serif text-3xl font-semibold text-ink-900 dark:text-paper-50">最近文章</h2>
        </div>
        <RouterLink class="focus-ring rounded-full text-sm font-semibold text-antique-600 transition hover:text-olive-700 dark:text-antique-400 dark:hover:text-paper-50" to="/posts">
          查看全部文章 →
        </RouterLink>
      </div>
      <div class="grid gap-5 lg:grid-cols-3">
        <PostCard v-for="post in recentPosts" :key="post.slug" :post="post" />
      </div>
    </section>

    <!-- 首页精选项目。 -->
    <section class="page-shell py-12 pb-20">
      <div class="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-antique-600 dark:text-antique-400">精选作品</p>
          <h2 class="mt-2 font-serif text-3xl font-semibold text-ink-900 dark:text-paper-50">项目记录</h2>
        </div>
        <RouterLink class="focus-ring rounded-full text-sm font-semibold text-antique-600 transition hover:text-olive-700 dark:text-antique-400 dark:hover:text-paper-50" to="/projects">
          查看项目 →
        </RouterLink>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        <ProjectCard v-for="project in featuredProjects" :key="project.name" :project="project" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HeroIllustration from '../components/home/HeroIllustration.vue';
import PostCard from '../components/posts/PostCard.vue';
import ProjectCard from '../components/projects/ProjectCard.vue';
import { projects } from '../data/projects';
import { getRecentPosts } from '../lib/posts';

// 首页只展示最新三篇文章与前三个精选项目。
const recentPosts = getRecentPosts(3);
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
</script>
