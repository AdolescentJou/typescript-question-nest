// 实现一个工具类型去除掉指定类型中键值类型为string的属性

type A222<T> = {
  [A in keyof T as string extends T[A] ? never : A]: T[A];
};

type A223<T> = {
  [A in keyof T as T[A] extends Exclude<T[keyof T], string> ? A : never]: T[A];
};

type A224<T> = Exclude<T[keyof T], string>;

type C = {
  name?: string;
  age: number;
};

type DD = A223<C>;

type X = null extends Function ? 'a' : 'b'