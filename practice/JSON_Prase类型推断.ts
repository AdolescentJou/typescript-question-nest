// 推断JSON.prase反序列化之后的类型
type json<T> = string & T;

interface JSON {
  parse<T>(text: json<T>, reviver?: (key: any, value: any) => any): T;
  stringify<T>(value: T, replacer?: (key: string, value: any) => any, space?: string | number): json<T>;
  stringify<T>(value: T, replacer?: (number | string)[] | null, space?: string | number): json<T>;
}

export const JSON = window.JSON as unknown as JSON;

type Person = {
  name: string;
  age: number;
};
const role: Person = {
  name: 'jj',
  age: 20,
};

const str: json<Person> = JSON.stringify(role);
const x = JSON.parse(str);

const y = JSON.parse('111') as unknown as number;