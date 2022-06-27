// 闭包的引用
// 情况：如果说函数外部就是想引用函数内部的变量，需要用到闭包

function foo1() {
    let a = 1;
}

foo1();
// console.log(a);

// 闭包（closure）：指有权访问另一个函数作用域中变量的函数。



function fn1() {
    let a = 10;

    function fn2() {
        console.log(a + 10);
    }
    fn2();
}

fn1();
// 这里称fn2为闭包函数

// 















