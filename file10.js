// alert("Assalam O alakom!"); //it give message as a top-up.

// let name = prompt("What is your name?");
// console.log(name); //it give mesage to the user and also take a message or input from the user.

// //Let's Practice

// let num = prompt("Enter a number:");
// if (num % 5 === 0) {
//   console.log(num, "num is a multiple of 5");
// } else {
//   console.log(num, "num is not multiple of 5");
// }

// let numb = prompt("Enter a number:");
// if (numb % 7 === 0) {
//   console.log(numb, "is a multiple of 7");
// } else {
//   console.log(numb, "is not multiple of 7");
// }

// Giving a Grade to the students according to their marks.

let score = prompt("Enter your score(0-100)");
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "Fail and doing more study";
}

console.log("According to your scores, your grade is:", grade);
