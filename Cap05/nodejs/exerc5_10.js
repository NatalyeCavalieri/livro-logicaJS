// Create a program for a store that reads the value of a account and the times number that client want installment this value. For easy change, the shopkeeper want that the installments initial doesn't has cents, just end installments. Inform as response the value foreach installments.

const prompt = require("prompt-sync")()

const value = Number(prompt("The Value R$: "))
const installment = Number(prompt("installments number: "))

const valueInstallment = Math.floor(value / installment)
const valueEnd = valueInstallment + (value%installment)

for(let i = 1; i < installment; i++){
  console.log(`${i} parcela: R$ ${valueInstallment.toFixed(2)}`)
}
console.log(`${installment} parcela: R$ ${valueEnd.toFixed(2)}`)