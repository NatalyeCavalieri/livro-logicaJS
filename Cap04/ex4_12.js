// Create a program to simulate a parking meter, which reads the coins value deposited in a parking terminal rotating. The program most informs the permanence time of vehicle  in location and the change (is exits), like in example, if the value is lower to minimum time, show the message " insufficient value"


const prompt = require("prompt-sync")()

const value = Number(prompt("Enter the value "))

const valueOne = 1.00
const timeOne = 30

const valueTwo = 1.75
const timeTwo = 60

const valueThree = 3.00
const timeThree = 120

let change = 0
let permanence = 0

if (value >= valueThree) {
    permanence = timeThree;
    change = value - valueThree;
} else if (value >= valueTwo) {
    permanence = timeTwo;
    change = value - valueTwo;
} else if (value >= valueOne) {
    permanence = timeOne;
    change = value - valueOne;
} else {
  console.log("The insufficient value")
   }
   console.log(`Permanence is: ${permanence} min`)
   console.log(`The change is ${change.toFixed(2)}`)