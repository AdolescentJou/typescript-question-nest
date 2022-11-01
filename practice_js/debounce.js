

/*
  编写方法实现debounce

  尽可能的去优化它
*/

function debounce(fn, delay) {
  let timer;
  const _ = this;
  return function (_, ...args) {
    let that = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
}

function test(){
  console.log('方法开始执行');
}

const debounceTest = debounce(test,3000);

debounceTest();
debounceTest();
debounceTest();
debounceTest();
debounceTest();
debounceTest();