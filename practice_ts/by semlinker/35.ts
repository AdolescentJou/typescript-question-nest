// 实现一个 Add 工具类型，用于实现对数值类型对应的数值进行加法运算。具体的使用示例如下所示：


type A0 = Add<5, 5>; // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30>; // 40

type NewArray<T extends number, R extends any[] = []> = R['length'] extends T ? R : NewArray<T, [...R, '']>
type Add<T extends number, R extends number> = [...NewArray<T>, ...NewArray<R>]['length'] 

// 你的实现代码