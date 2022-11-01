// 将'name age' 这样的类型 转化为 {name:string,age:string}这样的类型

type Obj<T extends string> = {
  [A in T]: string;
};

type TransformType<T extends string> = T extends `${infer A} ${infer B}`
  ? TransformType<B> & {
      [P in A]: string;
    }
  : {
      [P in T]: string;
    };

type Test = TransformType<'name age sex'>;

const role: Test = {
  name: '11',
  age: '22',
  sex: 'm',
};
