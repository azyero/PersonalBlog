<template>
  <article class="surface flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:border-antique-500/30">
    <!-- 项目标识图标。 -->
    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-antique-500/10 text-antique-600 dark:text-antique-400">
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 8.5h10M7 12h6M7 15.5h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
        <path d="M5 4.5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.7" />
      </svg>
    </div>

    <!-- 项目名称与简介。 -->
    <h2 class="font-serif text-2xl font-semibold text-ink-900 dark:text-paper-50">{{ project.name }}</h2>
    <p class="mt-3 flex-1 leading-7 text-ink-500 dark:text-paper-100/70">{{ project.description }}</p>

    <!-- 技术栈标签。 -->
    <div class="mt-6 flex flex-wrap gap-2">
      <span
        v-for="item in project.tech"
        :key="item"
        class="rounded-full bg-antique-500/10 px-3 py-1 text-xs font-medium text-antique-600 dark:text-antique-400"
      >
        {{ item }}
      </span>
    </div>

    <!-- 跳转到项目外链。 -->
    <a class="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full text-sm font-semibold text-olive-700 transition hover:text-antique-600 dark:text-olive-500 dark:hover:text-antique-400" :href="project.href" target="_blank" rel="noreferrer">
      查看项目
      <span aria-hidden="true">→</span>
    </a>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '../../types/content';

// 父组件传入当前卡片要展示的项目数据。
defineProps<{
  project: Project;
}>();
</script>
