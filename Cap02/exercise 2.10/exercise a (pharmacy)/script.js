// A pharmacy is with a promotion, in buy of two units of a same drug, the client get how discount the centavos of the value total. Create a program that read the description and price of the drug, inform the value of product in promotion.

const form = document.querySelector("form")
const drug= document.querySelector("h3")
const promotion = document.querySelector("h4")

form.addEventListener("submit", (e) =>{
  const nameDrug = form.inDrug.value
  const valueDrug = Number(form.inPrice.value)

  const valuePromotion =  Math.floor(valueDrug * 2)

  drug.innerText = `Promotion of ${nameDrug}`
  promotion.innerText = `Take two for just R$ ${valuePromotion.toFixed(2)}`

  e.preventDefault()
});