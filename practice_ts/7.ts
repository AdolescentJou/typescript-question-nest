// 使用类型别名定义一个 EmptyObject 类型，使得该类型只允许空对象赋值：
// type EmptyObject = {};

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = {
  // 将出现编译错误
  prop: 'TS',
};

//PropertyKey 可以指代对象的所有属性名
type EmptyObject = {
  // type PropertyKey = string | number | symbol
  [K in PropertyKey]: never;
};

// 在通过 EmptyObject 类型的测试用例检测后，我们来更改以下 takeSomeTypeOnly 函数的类型定义，
// 让它的参数只允许严格SomeType类型的值。具体的使用示例如下所示：

type SomeType = {
  prop: string;
};

type onlyKinT<T, K extends T> = {
  [P in keyof K]: P extends keyof T ? K[P] : never;
};

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值

// 使用泛型捕捉到传入的变量类型
// 思路 找到 SomeType 子类型上特有的属性，将其定义为 never
function takeSomeTypeOnly<T extends SomeType>(x: onlyKinT<SomeType, T>) {
  return x;
}

// 测试用例：
const x = { prop: 'a' };
takeSomeTypeOnly(x); // 可以正常调用

const y = { prop: 'a', addditionalProp: 'x' };
takeSomeTypeOnly(y); // 将出现编译错误

export default {};
