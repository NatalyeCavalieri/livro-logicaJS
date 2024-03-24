const prompt = require ("prompt-sync")()
const vehicle = prompt("Vehicle: ")
const price = Number(prompt("Price R$: "))

const downPayment = price * 0.50 
const installments = (price * 0.50) / 12
console.log(`Promotion: ${vehicle}`)
console.log(`Down Payment of R$: ${downPayment.toFixed(2)}`)
console.log(`+12 installments of R$: ${installments.toFixed(2)}`)