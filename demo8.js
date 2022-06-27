// 预编译

// function foo() {
//     var a = b = 100; // 连续赋值
//     console.log(b);
// }

// foo();

// // console.log(window.b); // 在全局范围内访问 b
// // console.log(b); // 在全局范围内访问 b，但是前面没有加 window 这个关键字

// // console.log(window.a); // 在全局范围内访问 a
// // console.log(a); // 在全局范围内访问 a，但是前面没有加 window 这个关键字



// // this指向
// // call() apply() bind()

// // foo.call();

// var obj1 = {
//     name: 'liew',
//     age: 1,
// }

// function foo2(a, b) {
//     console.log(this);
//     console.log(this.name);
//     console.log(a + b);
// }

// foo2.call(obj1, 2, 3);//这里的call()可以改变this的指向的位置。

// // 通过call()实现继承
// function Father(myName, myAge) {
//     this.name = myName;
//     this.age = myAge * 2;
// }

// //这里call()里面放this是说将 father 里面的 this 修改为 Son 里面的 this；
// // 另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
// function Son(myName, myAge) {
//     Father.call(this, myName, myAge);
// }

// const son1 = new Son('liew', 2);
// // console.log(JSON.stringify(son1));


// // apply()作用和call()相同，但是apply()里面传入的是实参，必须是数组
// // 所以可以用来求解数组的最大和最小的元素；
// const arr1 = [1, 33, 56, 534, 78, 0, -7, 56, 889];

// const maxArr = Math.max.apply(this, arr1);
// // console.log(maxArr);

// const minArr = Math.min.apply(this, arr1);
// // console.log(minArr);



// bind(),虽然不会调用函数，但是可以改变函数内部的this指向
// 如果有些函数，我们不需要立即调用，但是又想改变这个函数内部的this指向，此时用 bind() 是最为合适的。
// 返回的是函数的拷贝


// 高阶函数？？
function fn1() {
    let a = 20;

    return function () {
        console.log(a);
    };
}

const f = fn1(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
f();

// 为什么说产生了闭包















