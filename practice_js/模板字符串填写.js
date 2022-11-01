// 模版替换引擎函数，根据模版字符串和传入的数据返回替换后的字符串，形如(template, data)=> string,具备一定的扩展性

// template:模版字符串，例如"My name is ${ name }, I'm ${ age } years old."data:数据对象，例如{name: '小王', age: 20 }

function render(template, data) {
  let result = template;
  Object.keys(data).forEach((key) => {
    result = result.replace(`\${${key}}`, data[key]);
  });
  return result;
}

console.log(render("My name is ${name}, I'm ${age} years old.", { name: '小王', age: 20 }));
