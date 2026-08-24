// for (let count = 1; count <= 80000; count++) {
//   console.log("Apna College");
// }

// let sum = 0;
// for (let i = 1; i <= 60; i++) {
//   sum = sum + i; // its actually work like 1+2+3+4+5+6..........+45.
// }
// console.log("sum=", sum);

// console.log("LOOP has Ended");

let sum = 0;
let n = 100;
for (let a = 1; a <= n; a++) {
  sum = sum + a;
}
console.log("sum=", sum);

// Print A 1 t0 5
let A = 1;
while (A <= 15) {
  console.log("A=", A);
  A++;
}
console.log(A);

//Infinite Loop!
//we don't used infinite loop in our programing .

// //While loop
// let i = 2;
// while (i <= 8) {
//   console.log("i=", i);
//   i++;
// }

//Do while loop;

let i = 1;
do {
  console.log("i=", i);
  i++;
} while (i <= 20);
console.log(i);

// for-of loop
let str = "Muhammad Esa";
for (let i of str) {
  console.log("i=", i);
}

// for in loop
let student = {
  name: "Muhammad Esa",
  age: 20,
  marksinmatric: 1073,
  ispass: true,
};

for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}
