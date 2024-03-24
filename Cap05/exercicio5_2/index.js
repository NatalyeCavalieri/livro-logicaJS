const form = document.querySelector("form")
const increment = document.querySelector("h3")


form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const number = form.inNumber.value

  let response = `Entre ${number} até 1: `
  for(let i = number; i > 1; i--){
      response = response + i + ", "
  }
  response = response + "1"
  increment.innerText = response
})