// The entry to a fishing club costs 20,00 per person and each person has the right to get a fish. Extra fishes cost 12,00. Create a program that reads the number of people in a family who were to the club and the number of fishes took while fishing. Inform the amount to pay.

const prompt = require("prompt-sync")()

const people = Number(prompt("How many people: "))
const fishes = Number(prompt("How many fishes: "))

let pay
if(fishes <= people){
  pay = people * 20
}else{
pay = (people * 20) + ((fishes - people) * 12)
}

console.log(`Amount pay R$: ${pay.toFixed(2)}`)