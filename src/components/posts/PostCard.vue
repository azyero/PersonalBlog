<template>
  <article class="surface group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-antique-500/30">
    <!-- 文章辅助信息：发布时间与阅读时长。 -->
    <div class="mb-5 flex flex-wrap items-center gap-3 text-sm text-ink-500 dark:text-paper-100/60">
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <span aria-hidden="true">·</span>
      <span>{{ post.readingTime }}</span>
    </div>

    <!-- 文章标题，点击后进入详情页。 -->
    <h2 class="font-serif text-2xl font-semibold leading-tight text-ink-900 dark:text-paper-50">
      <RouterLink class="focus-ring rounded-md transition group-hover:text-antique-600 dark:group-hover:text-antique-400" :to="`/posts/${post.slug}`">
        {{ post.title }}
      </RouterLink>
    </h2>

    <!-- 摘要最多展示三行，保持卡片高度更整齐。 -->
    <p class="mt-3 line-clamp-3 text-base leading-7 text-ink-500 dark:text-paper-100/70">
      {{ post.summary }}
    </p>

    <!-- 标签列表，用于快速识别文章主题。 -->
    <div class="mt-6 flex flex-wrap gap-2">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="rounded-full border border-olive-500/20 bg-olive-500/10 px-3 py-1 text-xs font-medium text-olive-700 dark:text-olive-500"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { formatDate } from '../../lib/date';
import type { Post } from '../../types/content';

// 父组件传入当前卡片要展示的文章数据。
defineProps<{
  post: Post;
}>();
</script>
