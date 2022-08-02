// 实现一个 Merge 工具类型，用于把两个类型合并成一个新的类型。第二种类型（SecondType）的 Keys 将会覆盖第一种类型（FirstType）的 Keys。具体的使用示例如下所示：

type Foo = {
  a: number;
  b: string;
};

type Bar = {
  b: number;
};

type And = Merge<Foo, Bar>;

const ab: Merge<Foo, Bar> = { a: 1, b: 2 };

type Merge<FirstType, SecondType> = {
  [P in keyof (SecondType & FirstType)]: P extends keyof SecondType
    ? SecondType[P]
    : P extends keyof FirstType
    ? FirstType[P]
    : never;
};
