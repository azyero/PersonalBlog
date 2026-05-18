<template>
  <section class="page-shell py-16 lg:py-20">
    <!-- 项目页说明。 -->
    <div class="max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-antique-600 dark:text-antique-400">工作台</p>
      <h1 class="mt-3 font-serif text-5xl font-semibold text-ink-900 dark:text-paper-50">项目</h1>
      <p class="mt-5 text-lg leading-8 text-ink-500 dark:text-paper-100/70">
        这里放一些小工具、写作系统和产品实验。每个项目都尽量保持轻量，方便长期维护和持续迭代。
      </p>
    </div>

    <!-- 全量项目卡片列表。 -->
    <div class="mt-10 grid gap-5 md:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../components/projects/ProjectCard.vue';
import { projects } from '../data/projects';
</script>
