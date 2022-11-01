



export const debounce = <F extends (...args: any[]) => void>(fn: F, delay = 200) => {
  let timeout = 0;
  return function (this: any, ...args: any[]) {
    timeout && clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  } as F;
};
