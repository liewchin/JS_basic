// 对象的基本操作

var Student = new Object();

Student.name = 'liew';
Student.age = 10;
Student.gender = 'female';


function Teacher(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


const per1 = new Teacher('zhang', 30, 'male');
per1.name = 'didid';
console.log(JSON.stringify(per1));


// ES6中,遍历数组，for of和for in
let arr1 = [2, 5, 7, 9];

for (let value of arr1){
    console.log(value);
}
// for...of 不会开拓另外的内存空间
// for...in 主要用于遍历对象的属性

for (const number in arr1) {
    console.log(number);
}





















