//A supermarket is with a promotion - To increase yours sales in sector hygiene, each label of product most show a message displaying 50% of discount (for a item) in buy of three units of product. Create a program that read description and price of a product. After, show the messages indicating the promotion.

const form = document.querySelector("form")
const takeThree = document.querySelector("h3")
const thirdProduct = document.querySelector("h4")


form.addEventListener("submit", (e) =>{
  const product = form.inProduct.value
  const price = form.inPrice.value

  const promotion = price * 2 + price / 2
  const valueThirdProduct = price / 2

  takeThree.innerText = `${product} - Promotion: Take 3 to R$ ${promotion.toFixed(2)}`
  thirdProduct.innerText = `The third product just cost: R$ ${valueThirdProduct.toFixed(2)}`

  e.preventDefault()
})