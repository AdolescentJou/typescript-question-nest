/*
  实现一个convert函数,接收一个10进制整数n，转化为7进制数(用字符串表示)。例如7转化为'10'，2019转化为'5613'。
*/

function convent(n) {
  let reslut = '';

  let transNum = n;
  while (transNum > 7) {
    let mostPow = 0;
    for (let i = 0; Math.pow(7, mostPow) < transNum; i++) {
      mostPow = i;
    }
    const singleNum = Math.floor(transNum / Math.pow(7, mostPow - 1));
    transNum = transNum - Math.pow(7, mostPow - 1) * singleNum;
    reslut = reslut + singleNum;
  }
  reslut = reslut + transNum;
  return reslut;
}

console.log(convent(77));
console.log(convent(771));
console.log(convent(10));
console.log(convent(223));
console.log(convent(55));
