// 内置的对象Number

// let num = 3.456;
// let num2 = num.toFixed(2);

// console.log(num);
// console.log(num2);

// console.log(typeof num);
// console.log(typeof num2);


// var num3 = new Number(123);
// console.log(typeof num3);


// //// 内置的对象Math,不需要new,内部封装的属性可以直接调用
// var math1 = Math.random();
// console.log(math1);


// // math.random()生成0-x随机整数
// // console.log(Math.round(Math.random() * x));
// console.log(Math.round(Math.random() * 5));

// // math.random()生成x-y随机整数(不包含右边)
// // console.log(Math.round(Math.random() * (y - x) + x));
// console.log(Math.round(Math.random() * (10 - 6) + 6));


// 【重要】生成 [x, y]之间的随机整数
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

console.log(getRandom(5,8));


// 随机点名
const arr = ['liew', 'dd', 's', 'll'];
const index = getRandom(0, arr.length - 1);

console.log(arr[index]);


console.log(Math.pow(3, 2));
console.log(Math.sqrt(8));

var url = "www. baidu.com";

var str = encodeURIComponent(url);
console.log(str);
console.log(decodeURIComponent(str));


