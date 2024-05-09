import { viteMockServe } from 'vite-plugin-mock';

export function setupMockPlugin(isBUild: boolean) {
    return viteMockServe({
        mockPath: 'mock',
        enable: !isBUild,
    });
}
