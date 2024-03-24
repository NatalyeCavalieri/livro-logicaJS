//Create a program that read a number and calculate your square root. If root is exacts (squares perfect), inform her, if else, inform:  "Not has root exacts for ..." 

const form = document.querySelector("form")
const responseRoot = document.querySelector("h3")

form.addEventListener("submit", (e)=>{
  e.preventDefault()

  const number = Number(form.inNumber.value)

  const squareRoot = Math.sqrt(number)
  
  if(Number.isInteger(squareRoot)){
    responseRoot.innerText = ` ${squareRoot}`
  }else{
    responseRoot.innerText= "There is no square root for this number"
  }
})