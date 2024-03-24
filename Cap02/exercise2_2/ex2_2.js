// Create a program to a cinema, that read the title and the duration of the a film in minutes. Show the title of the movie and convert the duration to hours and minutes.

const form = document.querySelector("form")
const respTitle = document.querySelector ("h3")
const respDuration = document.querySelector("h4")

form.addEventListener("submit", (e) =>{
  const title = form.inTitle.value
  const duration= Number(form.inDuration.value)

  const hours = Math.floor(duration/60)
  const minutes = duration % 60 

  respTitle.innerText = title
  respDuration.innerText = `${hours} hour(s) and ${minutes} minutes`
  

  e.preventDefault()
})