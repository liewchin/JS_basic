// 面向过程和面向对象
// 对象的创建和构造函数

// 方法一,面向自变量
var obj1 = {};

const school = {
    student: 1000,
    teacher: 500,
    building: 20,
    name: 'HITSZ',
    text1: function() {
        console.log(this.building);
    },


};


console.log(JSON.stringify(school));

// 方法二: 工厂模式new Object()
function createPerson(name, age, gender) {
    // 创建一个新的对象
    var obj1 = new Object();
    // 添加属性
    obj1.name = name;
    obj1.age = age;
    obj1.gender = gender;
    obj1.sayName = function() {
        alert(this.name);
    };
    return obj1;
}

var obj2 = createPerson('zhu', 1, 'male');
var obj3 = createPerson('zh', 3, 'male');
var obj4 = createPerson('zu', 4, 'male');

console.log(JSON.stringify(obj2));


// 方法3，构造函数,需要大写首字母，调用的时候需要new
function Student(name) {
    this.name = name;
    this.sayHi = function (){
        console.log(this.name + '666');
    };
}


var stu1 = new Student('liew');
console.log(stu1);
stu1.sayHi();


function Person() { }

function Dog() { }

var person1 = new Person();

var dog1 = new Dog();

console.log(person1 instanceof Person); // 打印结果： true
console.log(dog1 instanceof Person); // 打印结果：false

console.log(dog1 instanceof Object); // 所有的对象都是Object的后代。因此，打印结果为：true










































































