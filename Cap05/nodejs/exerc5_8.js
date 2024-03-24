// The world cup occurs every 4 years since 1930 except in years 1942 and 1946 (second world war). Create a program that repeat the reading of numbers (years) until be typed 0. Inform for each year if it is or not the year of world cup.

const prompt = require('prompt-sync')()

console.log("Program World cup Years. Type 0 to exit")
console.log("---------------------------------------")

do{
  const year = Number(prompt("Year: "))

  if(year == 0){
    break
  }else if(year == 1942 || year == 1946){
    console.log(`${year} doesn't had cup`)
  }else if(year >= 1930 && year % 4 == 2){
    console.log(`Yes! ${year} was year of the cup`)
  }else{
    console.log(`No! ${year} don't was year of the cup `)
  }
}while(true)