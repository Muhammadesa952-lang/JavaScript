// 02 - Array methods: map, filter, reduce, sort, find
const people = [
  { name: "Ava", age: 28 },
  { name: "Ben", age: 17 },
  { name: "Cara", age: 35 },
  { name: "Dan", age: 22 },
];

const names = people.map((p) => p.name);
const adults = people.filter((p) => p.age >= 18);
const totalAge = people.reduce((sum, p) => sum + p.age, 0);
const sorted = [...people].sort((a, b) => a.age - b.age);
const cara = people.find((p) => p.name === "Cara");

console.log({ names, adults: adults.length, avgAge: totalAge / people.length });
console.log("Youngest:", sorted[0].name, "| Found:", cara);
