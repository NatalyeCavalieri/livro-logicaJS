// Create a program to a lan house of a airport - The program most read the value of each 15 (fifteen) minutes of use of a computer and the time of use per a client in minutes. Inform the value amount to be paid to client, knowing that the fractions plus of 15 minutes most be charged of form integral.

const form = document.querySelector("form")
const amountPayable = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const valueMin = Number(form.inValue.value)
  const timeUse = Number(form.inTime.value)

  const periods = Math.ceil(timeUse / 15)
  const totalAmount = periods * valueMin

  amountPayable.innerText = `Value amount Payable is: ${totalAmount.toFixed(2)} R$`
  e.preventDefault()
})
