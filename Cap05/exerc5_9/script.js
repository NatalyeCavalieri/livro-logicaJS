// let's say that the chinchillas number of a farm triples each year, after the first year. Create a program that reads the initial number of chinchillas and years and inform the average number of chinchillas each year in farm. The number initial of chinchillas most be bigger or equal than 2 (a couple).

const form = document.querySelector("form")
const average = document.querySelector(".chinchillas")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const chinchillas = Number(form.inNumber.value)
  const years = Number(form.inYears.value)
  if (chinchillas < 2) {
    alert("The number of chinchillas must be greater than or equal to 2.")
    return
  }

  average.innerHTML = ""
  let currentChinchillas = chinchillas

  for (let i = 1; i <= years; i++) {
    const p = document.createElement("p")
    p.innerText = `Ano ${i}: ${currentChinchillas.toFixed(2)} chinchilas em média.`

    average.appendChild(p)
    if (i < years) {
      currentChinchillas *= 3 
    }
  }
})