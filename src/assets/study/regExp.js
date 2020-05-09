// 正则
// RegExp 只能处理字符串 
var str = 'good good '
var reg = /\d+/
reg.test(str) //false

str = '2019-01-28'
reg.exec(str) // [ '2019', index: 0, input: '2019-01-28', groups: undefined ]

// 编写正则表达式
// 字面量方式
var reg = /\d+/
// 构造函数 两个参数 元字符和修饰符
var reg = new RegExp('\\d+')

// 全局替换
let str = "<video class ... <video "
let str1 = str.replace(
    new RegExp("<video ", "g"),
    '<video controlslist="nodownload" '
);
console.log(str1);
