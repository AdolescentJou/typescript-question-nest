let target = {
  _name: "target",  
  get name() {
    return this._name;
  }
};
let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    // console.log('--------key---------',key);
    // console.log('--------value---------',value);
    // console.log('--------reveiver----------',receiver);
    // 忽略已有属性，避免影响它们
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError('Property must be a number.');
      }
    }
    // 添加属性
    return Reflect.set(trapTarget, key, value, receiver);
    // 不存在继承的情况下等同于
    // trapTarget[key] = value;
  },
  get(trapTarget, key, receiver) {
    if (!(key in receiver)) {
      throw new TypeError('Property ' + key + " doesn't exist.");
    }
    return Reflect.get(trapTarget, key, receiver);
    // 这里相当于 return target[key]
    // return trapTarget[key];
  },
});
// 添加一个新属性
proxy.count = 1;
console.log(proxy.count); // 1



console.log(proxy.name); // target
// 出现继承的情况时
let extendTarget = {
  _name: 'extend target',
};

Object.setPrototypeOf(extendTarget, proxy);

console.log(extendTarget.name); // 不使用Reflect，这里会打印target ---> 但是这里应该打印 extend target才对，因为this指向不准确
