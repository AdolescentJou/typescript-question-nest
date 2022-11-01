// 实现一个 Includes 工具类型，用于判断指定的类型 E 是否包含在 T 数组类型中。具体的使用示例如下所示：
// type Includes<T extends Array<any>, E> = // 你的实现代码

type I0 = Includes<[], 1>; // false
type I1 = Includes<[2, 2, 3, 1], 2>; // true
type I2 = Includes<[2, 3, 3, 1], 1>; // true

type Includes<T extends Array<any>, E> = E extends T[number] ? true : false;

type X<T extends Array<any>> = T[number] extends string ? T[number] : never;

type Y = X<[1, 2]>; // never
