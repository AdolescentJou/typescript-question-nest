// 实现一个 OptionalKeys 工具类型，用来获取对象类型中声明的可选属性。具体的使用示例如下所示：
type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

// type OptionalKeys<T> = // 你的实现代码
type PersonOptionalKeys = OptionalKeys<Person>; // "from" | "speak"

// 关键就在于这个as underfined 因为 对象的可选属性即使不传也可以，所以可以使用underfined来检测

type OptionalKeys<T> = keyof {
  [P in keyof T as undefined extends T[P] ? P : never]: T[P];
};
