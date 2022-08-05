// 取出对象中的所有值，组成一个联合类型

type FilterValueOfObj<T extends object> = T[keyof T];

const PageState = {
  Loading: 1,
  Normal: '2',
  Error: 3,
} as const;

type G = FilterValueOfObj<typeof PageState>;

