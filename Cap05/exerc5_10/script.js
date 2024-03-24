// Create a program that reads a number and verify if it is or not perfect. A perfect number is one that is equal the sum of the yours integer dividers (except the yourself number). The program most show the dividers of the number  and the sum its.  

const form = document.querySelector("form")
const dividers = document.querySelector("h2")
const ifPerfect = document.querySelector("h3")

form.addEventListener("submit", (e)=> {

  e.preventDefault()
  let numberDividers = []
  const number = Number(form.inNumber.value)

  let sum = 0
  for(let i = 1; i < number; i++){
    if(number % i === 0 ){
      numberDividers.push(i)
      sum += i
    }
  }
  dividers.innerText= `${numberDividers.join(', ')}` 

  if(sum === number){
    ifPerfect.innerText = `${number} is a perfect number`
  }else{
    ifPerfect.innerText = `${number} isn't a perfect number`
  }
 })

