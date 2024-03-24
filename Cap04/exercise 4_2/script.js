const form = document.querySelector("form")
const responseWeight = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = form.inName.value
  const height = Number(form.inHeight.value)
  const sexMale = form.male.checked
  const sexFemale = form.female.checked

  const heightMale = 22 * Math.pow(height, 2)
  const heightFemale = 21 * Math.pow(height, 2)

  function sex() {
    if (sexMale) {
      responseWeight.innerText = `${name} your weight ideal is: ${heightMale.toFixed(2)} `
    } else if (sexFemale) {
      responseWeight.innerText = `${name} your weight ideal is: ${heightFemale.toFixed(2)} `
    } else {
      responseWeight.innerText = "Please, select a gender"
    }
  }
  sex()

  const clearButton = document.querySelector("#clear")
  clearButton.addEventListener("click", () =>{
    form.reset()
    responseWeight.innerText = ""
  })
})
