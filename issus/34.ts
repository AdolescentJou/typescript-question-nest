// 实现一个 SmallerThan 工具类型，用于比较数值类型的大小。具体的使用示例如下所示：

type SS0 = SmallerThan<0, 2>; // true
type SS1 = SmallerThan<2, 0>; // false
type SS2 = SmallerThan<8, 10>; // true


// 辅助判断的数组 S 是从长度为 0 开始递增的，所以第一个和 L 相等的数一定是两个数中较小的那一个（有可能相等）
// 若 N 与 L 相等，则 N <= M，还需要一次额外判断
//    若 M 与 L 也相等，则 N === M
//    若 M 不等于 L，则 N < M
// 若 N 与 L 不相等，则继续判断 M
//    若 M 等于 L，这 N > M
//    若 M 也不等于 L，则表示 M，N 都不匹配，增加 S 长度，继续做下一次 SmallerThan 判断

type SmallerThan<N extends number, M extends number, S extends any[] = [], L = S['length']> = 
L extends N 
? L extends M ? false : true 
: L extends M ? false : SmallerThan<N, M, [...S, 1]>
// 你的实现代码
