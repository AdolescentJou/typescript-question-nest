// 取出对象数组的所有对象的某个属性组成一个联合类型
const objArray = [
  {
    name: 'A',
    age: 10,
  },
  {
    name: 'B',
    age: 11,
  },
  {
    name: 'C',
    age: 12,
  },
] as const;

type AgeUnion = typeof objArray[number]['name'];
