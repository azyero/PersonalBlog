<template>
  <section class="page-shell py-16 lg:py-20">
    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <!-- 个人简介。 -->
      <aside class="surface h-fit rounded-[2rem] p-7">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-antique-600 dark:text-antique-400">关于我</p>
        <h1 class="mt-3 font-serif text-5xl font-semibold text-ink-900 dark:text-paper-50">你好，我是小奶牛手记背后的写作者。</h1>
        <p class="mt-5 leading-8 text-ink-500 dark:text-paper-100/70">
          我写技术、项目、阅读和日常观察。这个博客希望成为一个稳定的记录空间。
        </p>
      </aside>

      <div class="space-y-6">
        <!-- 写作主题标签。 -->
        <section class="surface rounded-[2rem] p-7">
          <h2 class="font-serif text-3xl font-semibold text-ink-900 dark:text-paper-50">写作主题</h2>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <span v-for="theme in themes" :key="theme" class="rounded-2xl border border-antique-500/15 bg-white/35 p-4 text-ink-500 dark:bg-white/[0.04] dark:text-paper-100/70">
              {{ theme }}
            </span>
          </div>
        </section>

        <!-- 联系方式入口。 -->
        <section class="surface rounded-[2rem] p-7">
          <h2 class="font-serif text-3xl font-semibold text-ink-900 dark:text-paper-50">联系方式</h2>
          <p class="mt-4 leading-8 text-ink-500 dark:text-paper-100/70">
            最方便的方式是邮件。你也可以在 GitHub 找到我，一些小工具和实验通常会先从那里开始。
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a class="focus-ring rounded-full bg-olive-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-700" href="mailto:yeziwenppl@gmail.com">
              yeziwenppl@gmail.com
            </a>
            <a class="focus-ring rounded-full border border-antique-500/20 px-5 py-3 text-sm font-semibold text-ink-800 transition hover:border-antique-500/40 hover:bg-white/40 dark:text-paper-100 dark:hover:bg-white/[0.06]" href="https://github.com/azyero" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 个人介绍页要展示的主题关键词。
const themes = ['技术实践', '项目复盘', '读书笔记', '日常观察'];
</script>
