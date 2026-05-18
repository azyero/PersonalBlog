<template>
  <footer class="border-t border-antique-500/10 py-10">
    <div class="page-shell flex flex-col gap-4 text-sm text-ink-500 dark:text-paper-100/60 sm:flex-row sm:items-center sm:justify-between">
      <!-- 年份会自动跟随当前时间更新。 -->
      <p>© {{ year }} 小奶牛手记.鄂ICP备2026022162号</p>
      <!-- 常用外部与站内链接。 -->
      <div class="flex items-center gap-4">
        <a class="transition hover:text-antique-600 dark:hover:text-antique-400" href="mailto:yeziwenppl@gmail.com">邮箱</a>
        <a class="transition hover:text-antique-600 dark:hover:text-antique-400" href="https://github.com/azyero" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 在页脚展示当前年份，避免每年手动维护。
const year = new Date().getFullYear();
</script>
