import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { setupMockPlugin } from './mock';

export default function setupPlugins(isBulid: boolean, env: ViteEnv) {
    const plugins: PluginOption[] = [vue()];

    plugins.push(setupMockPlugin(isBulid));

    return plugins;
}
