<template>
  <section class="page-shell flex min-h-[60vh] items-center py-20">
    <!-- 兜底 404 提示与返回入口。 -->
    <div class="surface mx-auto max-w-2xl rounded-[2rem] p-8 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-antique-600 dark:text-antique-400">404</p>
      <h1 class="mt-3 font-serif text-5xl font-semibold text-ink-900 dark:text-paper-50">这个页面走丢了。</h1>
      <p class="mt-5 leading-8 text-ink-500 dark:text-paper-100/70">
        这个链接可能已经失效，或者页面还没有发布。可以先回到首页或文章归档继续浏览。
      </p>
      <RouterLink class="focus-ring mt-8 inline-flex rounded-full bg-olive-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-700" to="/">
        返回首页
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
