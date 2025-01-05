//Exercise 1
const str = "JavaScript is amazing!";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'a') {
    count++;
  }
}

console.log(`The letter "a" appears ${count} times in the string.`);

//Exercise 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumArray(numbers);

function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(result);

//Exercise 3
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

//Exercise 4
const myArray = [1, 2, 3, 4, 5];

const doesArrayContainFive = myArray.includes(5);

console.log(doesArrayContainFive);

//Exercise 5
//Exercise 6
const array1 = [1, 2];
const array2 = [3, 4];

const combinedArray = array1.concat(array2);

console.log(combinedArray);

//Exercise 7
function reverseString(string) {
  return string.split("").reverse().join("");
}

const originalString = "hello";
const reversedString = reverseString(originalString);

console.log(reversedString);

//Exercise 8
//Exercise 9
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

const sentence =
  "This is the beginning of my journey into software development";
const vowelCount = countVowels(sentence);

console.log("Number of vowels:", vowelCount);

//Exercise 10
//Exercise 11
const number = [1, 2, 3, 4, 10, 20, 40, 50];

const filteredNumbers = numbers.filter(number => number <= 10);

console.log(filteredNumbers);

//Exercise 14
function removeDuplicates(array) {
  
  return [...new Set(array)];
}

const inputArray = [1, 2, 2, 3,3,4];
const uniqueArray = removeDuplicates(inputArray); 
console.log(uniqueArray);

//Exercise 15 
function capitalizeWords(string) {
  const words = string.split(' ');
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1); 
  });
  return capitalizedWords.join(' '); 
}

const inputString = "hello world";
const capitalized = capitalizeWords(inputString);

console.log(capitalized);