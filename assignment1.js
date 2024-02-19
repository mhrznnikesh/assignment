//string manipulation
//function checkPalindrome(string) {
  // Find the length of the string
  //const len = string.length;

  // Loop through half of the string
  //for (let i = 0; i < len / 2; i++) {
      // Check if the first and last characters are the same
     // if (string[i] !== string[len - 1 - i]) {
    //      return 'It is not a palindrome';
  //    }
  //}

 // return 'It is a palindrome';
//}

// Take input from the user
//const string = prompt('Enter a string:');

// Call the function
//const result = checkPalindrome(string);
//console.log(result);

//takes a string as input and counts the number of words in it.

//function lambai(string) {

// return string.length; 
//}
// console.log(lambai("hello"))

// program that takes a string as input and reverses it.
//function ulto(string){
//  return string.split("").reverse().join("");
//}
//console.log(ulto("nikesh"))

//program that takes a string as input and converts it to uppercase.
//function myFunction(string) {
// return string.toUpperCase();
//}
//console.log(myFunction("nikesh"))

//program that takes a string as input and removes all the vowels from it
//function removeVowels(str) {
//const vowelsRegex = /[aeiouAEIOU]/g;
//const result = str.replace(vowelsRegex, '');
//return result;
//}
//const inputString = "Hello, this is an apple";
//const stringWithoutVowels = removeVowels(inputString);
//console.log(stringWithoutVowels); 

//number manipulation
//function isPrime(number) {
// if (number < 2) return false;
//for (let i = 2; i < number; i++) {
// if (number % i === 0) return false;
// }
// return true;
//}

//const inputNumber = 3;
//console.log(inputNumber + (isPrime(inputNumber) ? ' is' : ' is not') + ' a prime number');

//a program that takes an array of numbers as input and returns the sum of all the numbers.
//function sumArray(numbers) {
//var sum = 0; 
//for (var i = 0; i < numbers.length; i++) {
//  sum += numbers[i]; 
// }
// return sum;
//}
//var inputArray = [1, 2, 3];
//var total = sumArray(inputArray);
//console.log("The sum is:", total); 

//program to calculate the factorial of a number
//function factorial(number) {
// if (number === 0 || number === 1) {
// return 1;
//}
// var result = 1;
//for (var i = number; i >= 1; i--) {
//  result *= i;
// }
// return result; 
//}
//var inputNumber = 4;
//var result = factorial(inputNumber);
//console.log("The factorial of", inputNumber, "is:", result);

// program to check if a number is a perfect square
//function isPerfectSquare(number) {
//if (number < 0) {
//return false;
//}
//var squareRoot = Math.sqrt(number);
//return squareRoot % 1 === 0;
//}
//var inputNumber1 = 4;
//var inputNumber2 = 16;
//console.log(inputNumber1 + (isPerfectSquare(inputNumber1) ? " is" : " is not") + " a perfect square"); 
//console.log(inputNumber2 + (isPerfectSquare(inputNumber2) ? " is" : " is not") + " a perfect square");

//Fibonacci number
//function isFibonacci(number) {
  //if (number === 0 || number === 1) {
    //return true;
  //}
  //var prev = 0;
  //var current = 1;
  //while (current < number) {
    //var next = prev + current; 
    //prev = current;
    //current = next;
    //if (current === number) {
      //return true;
    //}
  //}
  //return false;
//}
//var inputNumber = 8;
//console.log(inputNumber + (isFibonacci(inputNumber) ? " is" : " is not") + " a Fibonacci number"); 
