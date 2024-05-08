import { createApp } from 'vue';
import router, { setupRouter } from './router/index';
import { setupPlugins } from './plugins';
import App from './App.vue';

async function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    setupPlugins(app);
    // 等待路由完全处理好了之后再去挂载页面
    await router.isReady();
    app.mount('#app');
}

bootstrap();
