// 实现一个 Repeat 工具类型，用于根据类型变量 C 的值，重复 T 类型并以元组的形式返回新的类型。具体的使用示例如下所示：

type R0 = Repeat<0, 0>; // []
type R1 = Repeat<1, 1>; // [1]
type R2 = Repeat<number, 2>; // [number, number]

// 思路，这里比较关键的点就是用extends判断数组length和给定number的关系，达到之前就一直放入T属性就行

type Repeat<T, C extends number, A extends Array<any> = []> = A['length'] extends C ? A : Repeat<T, C, [...A, T]>; // 你的实现代码
