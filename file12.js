// // Practice:1

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     //even number
//     console.log("num=", num);
//   }
// }

// //Odd Numbers
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 !== 0) {
//     //even number
//     console.log("num=", num);
//   }
// }

//Game
let gameNum = 26;
let userNum = prompt("Guses the game number; Hint: num is under 20");
console.log(userNum);
while (userNum != gameNum) {
  userNum = prompt(
    "You entered the wrong number. Guses the right number again please:",
  );
}
console.log("Congragulations! You enter the correct number");
