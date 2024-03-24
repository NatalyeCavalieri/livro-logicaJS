// create a program that reads a number. Inform if it's even or odd. Do with the IF... ELSE... traditional and, after, try create the condition with the ternary operator.

const prompt = require("prompt-sync")()

const number = Number(prompt("Enter a number "))

//TRADITIONAL CONDITION
if (number % 2 == 0) {
  console.log("This number is EVEN")
} else {
  console.log("This number is ODD")
}
 
// TERNARY CONDITION
const evenOrOdd = number%2==0 ? "This number is EVEN" : "This number is ODD"
console.log(evenOrOdd)