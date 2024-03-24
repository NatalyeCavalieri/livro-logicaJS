// Create a program to a company that reads the salary and time of service of the employees in company. Knowing that for each 4 years the employees receive a 1% increase. Calculate and inform the number of 4 years that employee has earned and final salary.

const prompt = require("prompt-sync")()
const salary = Number(prompt("Salary: "))
const time = Number(prompt("Time of service(years): "))

const quadrennium = Math.floor(time / 4)
const increase = salary * quadrennium / 100

console.log(`Total Quadrennium is: ${quadrennium}`)
console.log(`The final salary is: ${(increase+salary).toFixed(2)}`)