// 实现一个 ToPath 工具类型，用于把属性访问（. 或 []）路径转换为元组的形式。具体的使用示例如下所示：

// type ToPath<S extends string> = // 你的实现代码

// 思路:字符串替换

type ToPath<S extends string> = S extends `${infer A}.${infer B}`
  ? [...ToPath<A>, ...ToPath<B>]
  : S extends `${infer A}[${infer B}]`
    ? [A, B]
    : [S]

type T11 = ToPath<'foo.bar.baz'> //=> ['foo', 'bar', 'baz']
type T22 = ToPath<'foo[0].bar.baz'> //=> ['foo', '0', 'bar', 'baz']