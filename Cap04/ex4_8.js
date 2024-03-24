// A pharmacy needs a program that reads the total of a buy. 
//Show as the answer the number maximum of times that the client can make installments for this buy and the price of each installment. Consider the following conditions: A- each installment most be a minimum 20,00. B- the number maximum of installments allowed is 6.

const prompt = require("prompt-sync")()

const valor = Number(prompt("O valor da compra é: "))

const aux = Math.floor(valor/20)
//19 / 20 = 0,95 (MATH.FLOOR ARREDONDA PARA 0)

const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
// se for igual a zero (1 parcela-avista), se for >6 parcelas (paga 6 parcelas), se não mantem o valor de parcelas gerado pelo aux.

const valorParcela = valor / parcelas 

console.log(`Pode pagar em ${parcelas}x de R${valorParcela.toFixed(2)}`)


