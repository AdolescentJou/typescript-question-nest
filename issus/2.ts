// 本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。

export function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b'); // Ok

// 方案一，使用泛型规定a和b的类型
export function f2<T extends string | number>(a: T, b: T) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return (a as number) + (b as number); // error as b can be number | string
  }
}
f2(2, 3); // Ok
f2(1, 'a'); // Error
f2('a', 2); // Error
f2('a', 'b'); // Ok

// 方案二，函数重载
function f3(a: string, b: string): string
function f3(a: number, b: number): number
function f3(a: string | number, b: string | number ): string | number {
  if (typeof a === 'string') {
    return a + ':' + b;
  } else {
    return ((a as number) + (b as number));
  }
}

f3(2, 3); // Ok
f3(1, 'a'); // Error
f3('a', 2); // Error
f3('a', 'b') // Ok