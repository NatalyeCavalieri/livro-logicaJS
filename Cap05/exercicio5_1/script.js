//Create a multiplication table

const form = document.querySelector("form")
const table = document.querySelector("pre")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const number = Number(form.inNumber.value)

  let response = ""
  for (let i = 1; i <= 10; i++) {
    response = response + number + " x " + i + " = " + (number * i) + "\n"

  }
  table.innerText = response
})
