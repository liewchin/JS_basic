// 数组Array  属于内置对象
var arr1 = []
var arr2 = [1, 2, 3]

var arr3 = ['liew', 22, 35, {name:'xixi'}];
const arr4 = [
    [11, 12, 15],
    [111, 332, 4234],
]

var a = JSON.stringify(arr3);
console.log(typeof a);   //string

console.log(JSON.stringify(arr4));

// 获取元素
// 获取长度
console.log(arr3.length);
console.log(arr1.length);


// 修改数组的长度
arr4.length = 5;
console.log(arr4.length);
console.log(JSON.stringify(arr4));

// 遍历数组
for (var i = 0; i < arr4.length; i++){
    console.log(arr4[i])
}

// 稀疏矩阵








