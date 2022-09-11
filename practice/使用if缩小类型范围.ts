// 使用 if 来缩小类型的范围

type W = string | number;

let a = '11' as W;

if(typeof a !== 'string'){
	// a => number
	console.log(a);
}