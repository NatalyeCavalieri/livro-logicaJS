const form = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

let resposta = ""
let numContas = 0
let valTotal = 0

form.addEventListener("submit", (e)=>{
e.preventDefault()

const description = form.inDescription.value
const account = Number(form.inNumber.value)

numContas++
valTotal = valTotal + account
resposta = resposta + description + " -R$: " + account.toFixed(2)+ "\n"

resp1.innerText = `${resposta}----------------------------------------`
resp2.innerText = `${numContas} Conta(s) - total R$: ${valTotal.toFixed(2)}`

form.inDescription.value = ""
form.inNumber.value = ""
form.inDescription.focus()
})