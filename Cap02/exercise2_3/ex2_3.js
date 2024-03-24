// create a program to a resale of the cars. The program should read the model and price of the car. Display the input value as the response (50%) and the balance in 12 times.

const form = document.querySelector("form")
const respVehicle = document.querySelector("#outResp1")
const respInput = document.querySelector("#outResp2")
const resp12times = document.querySelector("#outResp3")

form.addEventListener("submit", (e) =>{
const vehicle = form.inVehicle.value
const price = Number(form.inPrice.value)

const input = price / 2
const Times12 = input / 12

const currencyOptions = { style: "currency", currency: "BRL" }

respVehicle.innerText = `Promotion: ${vehicle}`
respInput.innerText = `Entry of the: ${Times12.toLocaleString("pt-BR",currencyOptions
)}`
resp12times.innerText = `Promotion: ${input.toLocaleString("pt-BR",currencyOptions
)}`

e.preventDefault()

});