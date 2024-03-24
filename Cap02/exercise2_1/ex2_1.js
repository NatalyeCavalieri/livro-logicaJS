//created reference to form and h3
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//created listener to form and h3
form.addEventListener("submit", (e) => {
  const name = form.inName.value //the name typed in form
  resp.innerText = `Hello ${name}` //show the response of the program
  e.preventDefault() // prevent send of the form
})
