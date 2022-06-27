// 正则表达式
// 正则表达式用于定义一些字符串的规则。



// 定义的方法一
var reg = new RegExp('a');

var str1 = 'star';
var str2 = 'liew';

console.log(reg.test(str1));
console.log(reg.test(str2));

// 传两个参数时,i:ignore, g:global
var reg2 = new RegExp('L', 'i');

console.log(reg2.test(str2));



// 定义的方法二,慎用全局g的方法

var reg3 = /A/i;
// var reg3 = /A/g;

console.log(reg3.test(str1));



// 正则表达式的简单语法

// 或[]
var reg4 = /a|b/;
var reg5 = /[ab]/;

// 除了[^]
var reg6 = /[^ab]/;
var str3 = 'abc';

console.log(reg6.test(str3));


var reg7 = /[^0-9]/;
var str4 = '1992';
var str5 = '1992a';
console.log(reg7.test(str4));
console.log(reg7.test(str5));

































































