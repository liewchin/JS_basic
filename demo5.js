// 数组的常见方法
// 注意分清楚属性和方法
var arr1 = [1, 2, 55, 2, 56, '12', 'liew', [12, 23, 'sun']];

var result = arr1.toString();
var result2 = Array.isArray(arr1);

console.log(result2);



// 数组的添加和删除
console.log(arr1.push('didi'));     //返回数组长度
console.log(arr1);              
// console.log(arr1.pop());            //返回最后被弹出的数值
// console.log(arr1);
// console.log(arr1.shift());
// console.log(arr1);
// console.log(arr1.unshift('mine'));
// console.log(arr1);
// console.log(arr1.splice());
// console.log(arr1);


// 数组的合并和拆分
var arr2 = [
    [12, 34, 5555],
    ['12', '23', 12],
]


console.log(arr1.concat(arr2));
console.log(arr1.join(arr2));       //转换为字符串


var str1 = new String('12 , gi, hihigfx, hhh');
console.log(str1);
console.log(str1.split(','));       //转换为数组

// 数组排序
console.log(arr1.reverse());
console.log(arr1.sort());


// 数组的查找
// console.log(arr1.indexOf('12'));



// 遍历数组 for, map, filter

// 利用map实现数组的拷贝，修改
var arr3 = [1, 2, 444, 56, 89];
var arr4 = arr3.map(function (item, index){
    return item + 10;
});

console.log(arr4);

// 将数组1中的某个属性存储在数组2中 important

const arr5 = [
    { name: 'liew', age:'22'},
    { name: 'w', age:'1'},
]

const arr6 = arr5.map((item) => (item.name));

const arr7 = arr5.map((item) => ({
    myName: item.name,
    myAge: item.age,
}));

console.log('arr5: ' + JSON.stringify(arr5));
console.log('arr6: ' + JSON.stringify(arr6));
console.log('arr7: ' + JSON.stringify(arr7));



// 找出数组中arr3中大于4的元素，返回新数组
let arr8 = arr3.filter((item) => {
    if (item > 4){
        return true;
    }
    return false;
});

console.log(JSON.stringify(arr8));


let arr9 = arr3.filter((item) => (item > 4));
console.log(arr9);


























