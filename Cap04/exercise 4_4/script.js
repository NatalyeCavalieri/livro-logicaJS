// "Knowing that the time zone of France in relation to Brazil is approximately plus 5 hours, create a program that reads the time in Brazil and informs the time in France.

const form = document.querySelector("form")
const responseHours = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const hoursBrazil = Number(form.inHour.value)
  let hoursFrance = hoursBrazil + 5

  if (hoursFrance > 24) {
    hoursFrance = hoursFrance - 24
  }
  responseHours.innerText = `Hours in France is ${hoursFrance.toFixed(2)}`
})
