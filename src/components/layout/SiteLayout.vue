<template>
  <div class="flex min-h-screen flex-col">
    <!-- 全站顶部导航。 -->
    <SiteHeader />
    <!-- 当前路由页面的主体内容。 -->
    <main class="flex-1">
      <slot />
    </main>
    <!-- 全站底部信息。 -->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from './SiteFooter.vue';
import SiteHeader from './SiteHeader.vue';
</script>
