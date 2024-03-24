// Create a program that reads a number - that most be a hundred. Calculate and show a hundred inverted. If the number isn't a hundred , show message. Example: 123 -> 321

const prompt = require("prompt-sync")()

const hundreds = Number(prompt("Enter a number in the hundreds: "))

if(hundreds < 100 || hundreds >= 1000){
  console.log("Error... The number isn't in the hundreds")
  return
}

const number1 = Math.floor(hundreds / 100)   
const rest = hundreds % 100        
const number2 = Math.floor(rest / 10)   
const number3 = rest % 10             

console.log(`Inverted: ${number3}${number2}${number1}`)