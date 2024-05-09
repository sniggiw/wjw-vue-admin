import _ from 'lodash';

// 将 env 环境变量的值转换为原本定义的类型（env 文件中定义的变量默认全部会被转换成 string 类型）
export function parseEnv(env: Record<string, any>): ViteEnv {
    const envCopy: any = _.cloneDeep(env);

    Object.entries(env).forEach(([key, value]) => {
        if (value === 'true' || value === 'false') {
            envCopy[key] = value === 'true';
        }
        if (/^\d+$/.test(value)) {
            envCopy[key] = Number(value);
        }
    });

    return envCopy;
}
