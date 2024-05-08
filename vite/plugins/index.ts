import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';

export default function setupPlugins(isBulid: boolean, env: Record<string, any>) {
    const plugins: PluginOption[] = [vue()];
    return plugins;
}
