// 作用域和变量提升
// 作用域Scope


// 1.内部可以访问外部，外部是全局的，而外部不能访问内部(var)

var a = 'aaa';
function foo() {
    var b = 'bbb';
    console.log(a);
}

foo();
// console.log(b);//这里会报错


console.log(c);
var c = 123;
// 这里没有报错，因为var会提前声明,只是还没赋值


// 2.函数作用域也可以提前
fn1();

function fn1() {
    console.log('woshi hanshu fn1');
}


var c = 'ccc';
function foo2() {
    d = 'ddd';
    console.log(c);
}

foo2();
console.log(d); //函数中，没有 var 声明的变量都是全局变量，而且并不会提前声明。


if (true) {
    var num = 123;
    console.log(num); //123
}

console.log(num); 



