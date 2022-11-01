// TS 内置的工具类型：Partial<T>，它的作用是将某个类型里的属性全部变为可选项 ?。

declare namespace TsQu3 {
  interface Todo {
    title: string;
    description: string;
  }

  //那么如何定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的？对应的使用示例如下所示：

  type Foo = {
    a: number;
    b?: string;
    c: boolean;
  };

  // 测试用例
  type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

  // type SomeOptional = {
  // 	a?: number; // 该属性已变成可选的
  // 	b?: string; // 保持不变
  // 	c: boolean;
  // }

  // 解决思路：将给定的keys对应的属性变成可选的，可以分为 给定的属性可选 & 其他的属性不变

  type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
}
  