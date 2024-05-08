import { defineConfig, loadEnv } from 'vite';
// import vue from '@vitejs/plugin-vue';
import alias from './vite/alias';
import { parseEnv } from './vite/util';

import setupPlugins from './vite/plugins';

export default defineConfig(({ command, mode }) => {
    // 在开发环境下 command 的值为 serve，而在生产环境下为 build
    // mode 是指运行模式，也就是 .env[mode] 文件中的 mode
    const isBulid = command === 'build';
    const env = loadEnv(mode, process.cwd());

    // parseEnv(env)

    return {
        // plugins: [vue()],
        plugins: setupPlugins(isBulid, env),
        resolve: {
            alias,
        },
    };
});
