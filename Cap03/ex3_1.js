const prompt = require ("prompt-sync") () // adiciona pacote para entrada de dados
const num1 = Number(prompt("1º Number: "))
const num2 = Number(prompt("2º Number: "))
const som = num1 + num2

console.log(`The som is: ${som}`)