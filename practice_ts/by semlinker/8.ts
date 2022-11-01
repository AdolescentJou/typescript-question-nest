// 定义 NonEmptyArray 工具类型，用于确保数据非空数组。

const a: NonEmptyArray<string> = []; // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS']; // 非空数据，正常使用

// type NonEmptyArray<T> = // 你的实现代码

// 长度判断
type NonEmptyArray2<T> = T[]['length'] extends 0 ? never : T[];

// 第一项必须有值
type NonEmptyArray3<T> = T[] & { 0: T };
type NonEmptyArray<T> = [T, ...T[]];

export default {};
