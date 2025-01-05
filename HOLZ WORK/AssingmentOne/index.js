//Exercise 1
let width = 5;
let lenght = 4;
//Area of a triangle = Lenth * width

let Area = 5 * 4;
console.log(Area);

//Exercise 2
let x = 12;
let y = (x *= 5);
console.log(y);

//Exercise 3
// == only checks if two variables have the same value;
// === checks if two variables have the same value and type;
//Illustration when its true;
let z = 7;
let r = 7;
let j = z === r;
console.log(j);

//Illustration when its fales;
let l = "dog";
let t = 6;
let e = l === t;
console.log(e);

//Exercise 4
if (10 >= 5) {
  console.log("10 is greater than 5");
} else {
  console.log("10 is less than 5");
}

//Exercise 5
const string1 = "Hello";
const string2 = "World";

const joinedString = string1 + " " + string2;

console.log(joinedString);

//Exercise 6
let text = "Coding is fun";
let part = text.slice(10, 13);
console.log(part);

//Exercise 7
const number = 7;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//Exercise 8
//A number that is even is devisible by 2;
//A number that is an odd number is not devisible by 2;

const result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);
