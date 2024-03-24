const form = document.querySelector("form")
const symbols = document.querySelector("h3") 


form.addEventListener("submit", e =>{
  const number = Number(form.inNumber.value)
  e.preventDefault()

  let stars = ""

  for(let i = 1; i <= number; i++ ){
    if(i % 2 == 1){
      stars = stars + "*"
    }else{
      stars = stars + "_"
    }
  }
  symbols.innerText = stars
})