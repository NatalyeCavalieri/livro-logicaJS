// Create a program to a restaurant that read the price to kg and the consumption(in grams) of the a client. Show the value that must be pay.

const form = document.querySelector("form")
const PricePay = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const Buffet = Number(form.inKg.value)
  const consumption = Number(form.inGrams.value)

  const PriceConsumption = Buffet/1000 * consumption
  PricePay.innerText = ` Amount a payable: ${PriceConsumption.toFixed(2)}`

  e.preventDefault()
})