// 浅拷贝和深拷贝
// 浅拷贝：只拷贝最外面的一层数据，深拷贝每一层级别的数据都会拷贝

// ES6中，使用Object.assign()实现浅拷贝
// var obj1 = new Object();

// obj1.name = 'star';
// obj1.age = 15;
// obj1.gender = 'female';

// var obj2 = Object.assign({}, obj1);
// var obj3 = {};
// Object.assign(obj3, obj1);
// //记得把花括号写上
// // Object.assign(B, A)
// obj2.name = 'liew';

// console.log(JSON.stringify(obj2));

// console.log(JSON.stringify(obj1));



// const obj5 = {
//     name: 'qianguyihao',
//     age: 28,
//     desc: 'hello world',
// };

// const obj6 = {
//     name: '许嵩',
//     sex: '男',
// };

// // 浅拷贝：把 obj1 赋值给 obj2。这一行，是关键代码。这行代码的返回值也是 obj2
// Object.assign(obj6, obj5);

// console.log(JSON.stringify(obj6));


// 深拷贝for in 实现深拷贝

let obj7 = {
    name: 'liew',
    age: 10,
    info: {
        desc: 'hello',
    },
    color: ['red', 'blue', 'green'],
};

let obj8 = {};


deepCopy(obj8, obj7);
console.log(obj8);
obj7.info.desc = 'github';
console.log(obj8);


function deepCopy(newObj, oldObj) {
    for (let key in oldObj){
        let item = oldObj[key];
        if (item instanceof Array) {
            newObj[key] = [];
            deepCopy(newObj[key], item);
        }
        else if (item instanceof Object){
            newObj[key] = {};
            deepCopy(newObj[key], item);
        }
        else {
            newObj[key] = item;
        }
    }
}



























