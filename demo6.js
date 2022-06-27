// 函数

SayHello();

// 命名函数
function SayHello() {
    console.log('你好');
    console.log('Hello!');
    return 1;
}


console.log(typeof SayHello);

// 匿名函数
var fun2 = function() {
    console.log('我是匿名函数中封装的匿名代码');
    return 0;
}

// 构造函数
var fun3 = new Function('a', 'b', 'console.log("我是函数内部的内容");console.log(a + b);');

fun3(5, 3);

// 立即执行函数
(function() {
    console.log('right now function');
})();

// 函数的调用
console.log(fun2);
console.log(fun2());









