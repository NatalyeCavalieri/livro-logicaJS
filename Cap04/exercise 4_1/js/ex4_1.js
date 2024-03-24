const form = document.querySelector("form")
const averageNotes = document.querySelector("h3")
const situation = document.querySelector("h4")

form.addEventListener("submit", (e) => {
  const name = form.inName.value
  const firstNote = Number(form.inFirstNote.value)
  const secondNote = Number(form.inSecondNote.value)

  const calculateAverage = (firstNote + secondNote) / 2
  averageNotes.innerText = `Grade average is: ${calculateAverage}`
  function finalSituation() {
    if (calculateAverage >= 7) {
      situation.innerText = `Congratulations ${name}! You was passed.`
      situation.style.color = "blue"
      
    }else if (calculateAverage >=4 ){
      situation.innerText = `Attention ${name}! You are in recovery exam.`
      situation.style.color= "green"
    }else{
      situation.innerText = `You was failed ${name}!`
      situation.style.color = "red"
    }
  }
  finalSituation()
  e.preventDefault()
})
