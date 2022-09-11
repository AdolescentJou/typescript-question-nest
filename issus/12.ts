// 实现一个 Head 工具类型，用于获取数组类型的第一个类型。具体的使用示例如下所示：
// type Head<T extends Array<any>> = // 你的实现代码

// 测试用例
type H0 = Head<[]>; // never
type H1 = Head<[1]>; // 1
type H2 = Head<[3, 2]>; // 3

type Head<T extends Array<any>> = T[0] extends never ? never : T[0];
type Head2<T extends Array<any>> = T extends [] ? never : T[0];