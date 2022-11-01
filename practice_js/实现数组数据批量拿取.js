//题目5:实现下面函数的功能
// const arr = slice([1, '2',3, '4',5, '6',7, '8',9, '0']);
// 取得数组中索引从2到5的元素，返回新的数组arr['2:5'];
//[3, '4',5]请注意使用的语法，不是小括号，而是中括号

function slice(arr) {
  return new Proxy(
    {},
    {
      get(trapTarget, key, receiver) {
        const numarr = key.split(':');
        if (!(numarr.length === 2)) {
          throw new TypeError('Property ' + key + " doesn't exist.");
        }
        return arr.slice(Number(numarr[0]), Number(numarr[1]));
      },
    },
  );
}

const obj = slice([1, 2, 3, 4, 5, 6, 7]);
console.log(obj['-1:-3']);
