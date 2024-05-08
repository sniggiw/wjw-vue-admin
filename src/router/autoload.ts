// 自动注册的路由
/**
 * {
 *  name:""
 *  path:"",
 *  compoment:"",
 *  children:[{
 *
 *  }]
 * }
 */
import { RouteRecordRaw } from 'vue-router';

const layoutFiles = import.meta.glob('../layouts/*.vue', { eager: true });
const viewFiles = import.meta.glob('../views/**/*.vue', { eager: true });

function getRoute(file: string, module: any) {
    // . 匹配任意字符
    const name = file.replace(/.+layouts\/|.+views\/|.vue/gi, '');
    const route = {
        name: name.replace('/', '.'),
        path: `/${name}`,
        component: module.default,
    } as RouteRecordRaw;

    // return route;
    // 实现在组件中可以自定义路由名称和路径
    return Object.assign(route, module.default.route);
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    const childrenRoutes = [] as RouteRecordRaw[];
    Object.entries(viewFiles).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            const route = getRoute(file, module);
            childrenRoutes.push(route);
        }
    });
    return childrenRoutes;
}

function getRoutes() {
    const layoutRoutes = [] as RouteRecordRaw[];
    Object.entries(layoutFiles).forEach(([file, module]) => {
        const route = getRoute(file, module);
        route.children = getChildrenRoutes(route);
        layoutRoutes.push(route);
    });

    return layoutRoutes;
}

export default getRoutes();
