// 根据对象逆向推到类型

const devConfig = {
  url: 'xxx',
  cropid: '123',
};

type IConfigUtil<T extends object> = {
  [P in keyof T]: T[P];
};
type IConfig = IConfigUtil<typeof devConfig>;
