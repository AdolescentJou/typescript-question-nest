// 实现一个 RemoveIndexSignature 工具类型，用于移除已有类型中的索引签名。具体的使用示例如下所示：
interface Foo2 {
  [key: string]: any;
  [key: number]: any;
  bar(): void;
}

type FooWithOnlyBar = RemoveIndexSignature<Foo2>; //{ bar: () => void; }


// key 赋值为never 代表不存在这个key值

// type RemoveIndexSignature<T> = {
//   [key in keyof T as string extends key ? never : number extends key ? never : key]: T[key];
// };

type RemoveIndexSignature<T> = {
  [key in keyof T]: string extends key ? never : number extends key ? never : T[key];
};
