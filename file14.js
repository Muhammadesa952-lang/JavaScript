//Strings Methods in JavaScript:

let str = "Muhammad Esa ";
str = str.toUpperCase();
console.log(str);

let str1 = "Muhammad Esa";
str1 = str1.toLowerCase();
console.log(str1);

let str2 = "     Muhammad Esa             ";
str2 = str2.trim();
console.log(str2);

let str3 = "0123456789 ";
console.log(str3.slice(2, 7));

let str4 = "Muhammad Esa";
console.log(str4.slice(2, 8));

let res = "Hello Brother " + str + str3;
console.log(res);
