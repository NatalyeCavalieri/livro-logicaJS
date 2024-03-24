// Create a program that reads the a product name and the tags number to be printed of this product. Show the tags with the product name, in maximum two tags by row. 

const prompt = require("prompt-sync")()

const product = prompt("Product: ")
const number = Number(prompt("Tags Number: "))

for(let i = 1; i <= number / 2; i++){
  console.log(`${product.padEnd(20)}  ${product.padEnd(20)}`)
}

if(number % 2 == 1){
  console.log(product)
}