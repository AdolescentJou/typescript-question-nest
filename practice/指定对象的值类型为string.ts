// 指定对象的值类型必须为string

type Person = {
	[propName: string]:string;
}

const role : Person = {
	name:'wolf',
	age:11
}