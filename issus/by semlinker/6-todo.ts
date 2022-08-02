// 定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：
// type NaiveFlat<T extends any[]> = // 你的实现代码

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>;
// NaiveResult的结果： "a" | "b" | "c" | "d"

// 只支持一维的写法
type NaiveFlat<T extends any[]> = {
  [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P];
}[number];

// todo 递归写法

export {};
