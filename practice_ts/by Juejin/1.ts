// MutableKeys<T>查找T所有非只读类型的key组成的联合类型。
/**
 * 核心实现
 */
type MutableKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>;
}[keyof T];

/**
 * @desc 一个辅助类型，判断X和Y是否类型相同，
 * @returns 是则返回A，否则返回B
 */
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;


type T1 = {key1: string};
type T2 = {readonly key1: string};
type T3 = {key1: string};


type A1 = IfEquals<T1, T3, true , false>;

