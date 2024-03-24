const form = document.querySelector("form")
const response = document.querySelector("h3")


form.addEventListener("submit", (e)=> {
  e.preventDefault()
  const number = Number(form.inNumber.value)

/*
  let numDivisores = 0
  for(let i =1 ; i<= number; i++){
    if(number % i == 0){
      numDivisores++
    }
  }
   /*
  if(numDivisores == 2){
    response.innerText = `${number} é primo`
  }else{
    response.innerText = `${number} Não é primo`
  }
  */
  

  let temDivisor = 0
  for (let i = 2; i <= number/2; i++)
  if(number % i == 0){
    temDivisor = 1
    break
  }

  if(number > 1 && !temDivisor){
    response.innerText = `${number} é primo`
  }else{
    response.innerText = `${number} Não é primo`
  }

})
