//Exercise 1
function greet(name) {
    return("Hello, " + name + "!");
}
const greeting = greet("Francis");
console.log(greeting);

//Exercise 2 
function add(number1, number2) {
    return (number1 + number2);
}
const result = add(20,30);
console.log(result);

//Exercise 3
//Even numbers are numbers that are devisble by 2.
function isEven(number) {
    return (number % 2 ===0);
}
console.log(isEven(12));
console.log(isEven(10));
console.log(isEven(13));

//Exercise 4
//Loops 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Exercise 5
//first 5 multiples of 3
//Calculates the next multiple of 3 by adding 3 to the current multiple.
//count++; Increases the count by 1.
//count keeps track of how many multiples have been printed starting from 0.
 let n = 1;
 let count = 0;

 while (count < 5) {
    console.log(n * 3);
    n++;
    count++;
 }

 //Exercise 6
  


