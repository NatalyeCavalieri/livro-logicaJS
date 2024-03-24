// let's build the game guess the number, most generate a number to 0 from 100, and the user shoulder try guess. For prevent that the player use the same number two times and lost a opportunity, we will use the method INCLUDES. 

const form = document.querySelector("form")
const respError = document.querySelector("#error")
const respChance = document.querySelector("#chance")
const tips = document.querySelector("#tips")

const errors = []

const numberRandomTarget = Math.floor(Math.random() * 100) + 1 

const chances = 6

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  const number = Number(form.inNumber.value)

  if(number == numberRandomTarget){
    tips.innerText = `Congratulations!! Number drawn: ${numberRandomTarget}`
    form.btSubmit.disabled = true
    form.btAgain.className = "visible"
  }else{
    if(errors.includes(number)){
      alert(`You early bet the number ${number}. Try another...`)
    }else{
      errors.push(number)
      const numberErrors = errors.length
      const numberChances = chances - numberErrors

      respError.innerText = `${numberErrors} (${errors.join(", ")})`
      respChance.innerText = numberChances
      if(numberChances == 0){
        alert("Your chances finished...")
        form.btSubmit.disabled = true
        form.btAgain.className = "visible"
        tips.innerText = `Game Over!! The Number drawn is ${numberRandomTarget} `
      }else{
        const tip = number < numberRandomTarget ? "bigger" : "smaller"
        tips.innerText = `Tip: Try another number ${tip} than ${number}`
      }
    }
  }
  form.inNumber.value= ""
  form.inNumber.focus()
})