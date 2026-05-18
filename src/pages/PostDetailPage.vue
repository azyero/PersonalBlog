<template>
  <article v-if="post" class="page-shell py-14 lg:py-20">
    <!-- 返回文章归档。 -->
    <RouterLink class="focus-ring inline-flex rounded-full text-sm font-semibold text-antique-600 transition hover:text-olive-700 dark:text-antique-400 dark:hover:text-paper-50" to="/posts">
      ← 返回文章列表
    </RouterLink>

    <!-- 文章标题区与元信息。 -->
    <header class="mx-auto mt-10 max-w-3xl">
      <div class="flex flex-wrap items-center gap-3 text-sm text-ink-500 dark:text-paper-100/60">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span aria-hidden="true">·</span>
        <span>{{ post.readingTime }}</span>
      </div>
      <h1 class="mt-5 font-serif text-5xl font-semibold leading-tight text-ink-900 dark:text-paper-50">
        {{ post.title }}
      </h1>
      <p class="mt-5 text-xl leading-8 text-ink-500 dark:text-paper-100/70">
        {{ post.summary }}
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full border border-olive-500/20 bg-olive-500/10 px-3 py-1 text-xs font-medium text-olive-700 dark:text-olive-500"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <!-- Markdown 渲染后的正文内容。 -->
    <div class="surface mx-auto mt-10 max-w-3xl rounded-[2rem] p-6 sm:p-9">
      <div class="article-content" v-html="post.html"></div>
    </div>

    <!-- 正文末尾的返回按钮。 -->
    <div class="mx-auto mt-10 max-w-3xl">
      <RouterLink class="focus-ring inline-flex rounded-full bg-olive-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-700" to="/posts">
        返回全部文章
      </RouterLink>
    </div>
  </article>

  <!-- slug 无法匹配文章时的空状态。 -->
  <section v-else class="page-shell py-20">
    <div class="surface mx-auto max-w-2xl rounded-[2rem] p-8 text-center">
      <h1 class="font-serif text-4xl font-semibold text-ink-900 dark:text-paper-50">文章不存在</h1>
      <p class="mt-4 text-ink-500 dark:text-paper-100/70">这篇文章可能已经移动，或者还没有发布。</p>
      <RouterLink class="focus-ring mt-7 inline-flex rounded-full bg-olive-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-700" to="/posts">
        返回文章列表
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { formatDate } from '../lib/date';
import { getPostBySlug } from '../lib/posts';
import { setPageMeta } from '../lib/seo';

// 从当前路由派生 slug 与对应文章。
const route = useRoute();
const slug = computed(() => String(route.params.slug || ''));
const post = computed(() => getPostBySlug(slug.value));

// 文章内容变化时同步更新页面标题与摘要。
watchEffect(() => {
  if (post.value) {
    setPageMeta(`${post.value.title} | 小奶牛手记`, post.value.summary);
  } else {
    setPageMeta('文章不存在 | 小奶牛手记', '你访问的文章不存在。');
  }
});
</script>
