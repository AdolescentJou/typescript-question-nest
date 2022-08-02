// 实现一个 Unshift 工具类型，用于把指定类型 E 作为第一个元素添加到 T 数组类型中。具体的使用示例如下所示：
// type Unshift<T extends any[], E> =  // 你的实现代码

// 测试用例
type Arr0 = Unshift<[], 1>; // [1]
type Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]

type Unshift<T, E> = T extends [...infer R] ? [E, ...R] : never;

type A = Unshift<1, '2'>;
