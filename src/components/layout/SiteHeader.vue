<template>
  <header class="sticky top-0 z-40 border-b border-antique-500/10 bg-paper-50/90 backdrop-blur-xl dark:border-antique-400/25 dark:bg-[#151612]/95">
    <div class="page-shell flex min-h-20 flex-wrap items-center justify-between gap-4 py-4">
      <!-- 品牌入口：点击后回到首页。 -->
      <RouterLink class="focus-ring flex items-center gap-2 rounded-md" to="/" aria-label="小奶牛手记首页">
        <span class="font-serif text-3xl font-semibold tracking-tight text-ink-900 dark:text-paper-50">小奶牛手记</span>
        <span class="text-antique-500" aria-hidden="true">
          <svg class="h-8 w-8" viewBox="0 0 40 58" fill="none">
            <path d="M18 56 C16 42 20 27 28 14 C31 9 33 5 33 1" stroke="currentColor" stroke-linecap="round" />
            <path d="M22 34 C11 31 6 23 5 15 C15 17 22 24 22 34Z" stroke="currentColor" />
            <path d="M25 25 C35 22 38 15 38 9 C30 10 24 17 25 25Z" stroke="currentColor" />
          </svg>
        </span>
      </RouterLink>

      <!-- 主要站点导航。 -->
      <nav class="order-3 flex w-full items-center gap-1 overflow-x-auto text-sm font-medium sm:order-2 sm:w-auto sm:gap-2" aria-label="主导航">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="focus-ring rounded-full px-4 py-2 text-ink-600 transition hover:bg-antique-500/10 hover:text-antique-600 dark:text-paper-50/85 dark:hover:bg-antique-400/10 dark:hover:text-antique-300"
          active-class="bg-antique-500/10 text-antique-600 dark:bg-antique-400/15 dark:text-antique-300"
          exact-active-class="bg-antique-500/10 text-antique-600 dark:bg-antique-400/15 dark:text-antique-300"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- 次级操作区：联系入口与主题切换。 -->
      <div class="order-2 flex items-center gap-2 sm:order-3">
        <RouterLink
          class="focus-ring hidden rounded-full border border-antique-500/20 px-4 py-2 text-sm font-medium text-ink-800 transition hover:border-antique-500/40 hover:bg-white/40 dark:border-antique-400/35 dark:bg-white/[0.04] dark:text-paper-50 dark:hover:bg-antique-400/10 sm:inline-flex"
          to="/about"
        >
          联系我
        </RouterLink>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ThemeToggle from '../ui/ThemeToggle.vue';

// 顶部导航配置集中维护，便于统一渲染与扩展。
const navItems = [
  { label: '首页', to: '/' },
  { label: '文章', to: '/posts' },
  { label: '项目', to: '/projects' },
  { label: '关于', to: '/about' },
];
</script>
