<template>
  <!--
    应用级外壳：
    SiteLayout 提供全站共用布局，
    RouterView 会根据当前路由显示对应页面。
  -->
  <SiteLayout>
    <RouterView />
  </SiteLayout>
</template>

<script setup lang="ts">
// vue-router 提供的占位组件，用来渲染当前路由匹配到的页面。
import { RouterView } from 'vue-router';
// 自定义布局组件，内部包含页头、主体插槽和页脚。
import SiteLayout from './components/layout/SiteLayout.vue';
</script>
