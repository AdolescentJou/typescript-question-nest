type User = {
  id: number;
  kind: string;
};

export function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: 'customer',
  };
}

// 报错原因：T为User类型的扩展，但是并不局限于User类型，所以在返回的时候，并不能指定返回的数据是user类型

// 修改方案一，指定返回类型为User(你传入的数据可以是User类型的扩展，但是返回的数据必须是User类型)
export function makeCustomer2<T extends User>(u: T): User {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: 'customer',
  };
}

// 修改方案二，兼容传入数据类型(返回的数据结构，必须和传入的数据具有相同字段)
export function makeCustomer3<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    ...u,
    id: u.id,
    kind: 'customer',
  };
}

// 修改方案三，不设置返回类型，让其自动推导
export function makeCustomer4<T extends User>(u: T){
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: 'customer',
  };
}
