<template>
  <section class="page-shell py-16 lg:py-20">
    <!-- 文章归档页说明。 -->
    <div class="max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-antique-600 dark:text-antique-400">文章归档</p>
      <h1 class="mt-3 font-serif text-5xl font-semibold text-ink-900 dark:text-paper-50">全部文章</h1>
      <p class="mt-5 text-lg leading-8 text-ink-500 dark:text-paper-100/70">
        所有文章按时间倒序排列。这里会慢慢积累技术笔记、项目复盘、阅读记录和一些生活里的小观察。
      </p>
    </div>

    <!-- 全量文章卡片列表。 -->
    <div class="mt-10 grid gap-5 md:grid-cols-2">
      <PostCard v-for="post in posts" :key="post.slug" :post="post" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PostCard from '../components/posts/PostCard.vue';
import { getAllPosts } from '../lib/posts';

// 文章页展示完整的文章集合。
const posts = getAllPosts();
</script>
