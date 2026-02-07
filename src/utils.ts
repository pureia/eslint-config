import type { Awaitable } from './types';

/**
 * 检查值是否为非空对象
 * @param value - 要检查的值
 * @returns 如果值是非空对象则返回 true，否则返回 false
 */
export const isObject = (value: unknown): value is object => typeof value === 'object' && value !== null;

/**
 * 导入默认导出
 * @param importable - 动态导入的 Promise
 * @returns 返回模块的默认导出或整个模块对象
 */
export async function importDefault<T>(importable: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await importable;
  if (isObject(resolved) && ('default' in resolved)) return resolved.default as T extends { default: infer U } ? U : T;
  return resolved as T extends { default: infer U } ? U : T;
}
