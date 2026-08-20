//Conditional Statments

let age = 20;

if (age >= 20) {
  console.log("you are eligible for vote");
}

if (age < 20) {
  console.log("you are not eligible for vote");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}

console.log(color); //Ans: should be black.

if (mode === "dark") {
  color = "blue";
} else {
  color = "green";
}

console.log(color);

age = 19.99;
if (age >= 20) {
  console.log("You can vote");
} else {
  console.log("You can't vote b/c you're under 20");
}

//Let's Check the numbers are odd or even?

let num = 2827272610;

if (num % 2 === 0) {
  console.log(num, " The number is even");
} else {
  console.log(num, "  The number is odd");
}

//else-if Statment

let ages = 37;

if (ages < 18) {
  console.log("Junior");
} else if (ages > 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}

let modes = "pink";
color;

if (modes === "dark") {
  color = "Black";
} else if (modes === "light") {
  color = "white";
} else if (modes === "pink") {
  color = "Pink";
} else if (modes === "blue") {
  color = "Blue";
} else {
  color = "Green";
}

console.log(color);
