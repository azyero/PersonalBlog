import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/globals.css';

// 创建应用实例，挂载路由后渲染到页面根节点。
createApp(App).use(router).mount('#app');
