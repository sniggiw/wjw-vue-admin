/**
 * 在 es module 中，当某个模块被其他模块引用时，该模块中的顶层 import 语句会被执行，从而加载相应的资源；
 * 最后打包期间打包工具会通过 tree shaking 将一些没有用到的内容进行剔除；
 */

import './tailwindcss.css';

export function setupTailwindcss() {}
