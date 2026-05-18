<template>
  <!-- 根据当前主题状态切换月亮或太阳图标。 -->
  <button
    class="focus-ring inline-grid h-10 w-10 place-items-center rounded-full border border-antique-500/20 text-ink-800 transition hover:border-antique-500/40 hover:bg-white/40 dark:text-paper-100 dark:hover:bg-white/[0.06]"
    type="button"
    :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
    :aria-pressed="isDark"
    @click="toggleTheme"
  >
    <svg v-if="isDark" class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 14.2A7.7 7.7 0 0 1 9.8 3.5 8.8 8.8 0 1 0 20.5 14.2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
    </svg>
    <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" stroke-width="1.6" />
      <path d="M12 2.6V5M12 19v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.6 12H5M19 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// 本地存储键名与当前主题状态。
const storageKey = 'murmur-theme';
const isDark = ref(false);

// 同步响应式状态、根节点 class 与浏览器主题色。
function applyTheme(nextIsDark: boolean) {
  isDark.value = nextIsDark;
  document.documentElement.classList.toggle('dark', nextIsDark);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', nextIsDark ? '#191a17' : '#f4ead8');
}

// 用户点击按钮后切换主题，并尽量持久化偏好。
function toggleTheme() {
  const next = !isDark.value;
  applyTheme(next);

  try {
    localStorage.setItem(storageKey, next ? 'dark' : 'light');
  } catch {
    // 即使存储不可用，主题切换本身仍然可以继续生效。
  }
}

onMounted(() => {
  let savedTheme: string | null = null;

  // 读取历史偏好；隐私模式等场景下可能无法访问 localStorage。
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    savedTheme = null;
  }

  // 首次挂载时把已保存主题应用到页面。
  applyTheme(savedTheme === 'dark');
});
</script>
