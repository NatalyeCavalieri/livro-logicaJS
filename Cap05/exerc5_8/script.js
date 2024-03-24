// Create a program that reads the a fruit name and a number. The program most repeat the display of fruit name, according to the number informed. Use the (*) for separate the names. 

const form = document.querySelector("form")
const showFruit = document.querySelector("h3")

form.addEventListener("submit", e =>{
  e.preventDefault()

  const fruit = form.inFruit.value
  const number = Number(form.inNumber.value)

  showFruit.innerText = ""
  for(let i = 1; i <= number; i++ ){
    showFruit.innerText += ` * ${fruit} `  
  }
  form.inFruit.value = ""
  form.inNumber.value= ""
})