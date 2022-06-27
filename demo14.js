var str1 = '123sd125fh';

var result = str1.split(/[A-z]/);
console.log(result);

// 检查一个字符串是否是一个合法手机号

var PhoneStr = '1847606309';

var phoneReg = /^1[2-9][0-9]{9}$/;

console.log(phoneReg.test(PhoneStr));

































