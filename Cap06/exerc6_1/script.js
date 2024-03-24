//Our program most control the list of patient care  of the dental office.

const form = document.querySelector("form")
const inCare = document.querySelector("h2 span")
const listPatient = document.querySelector("ol")

const patients = []

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = form.inName.value
  patients.push(name)

  let list = ""

  for (let i = 0; i < patients.length; i++) {
    list += `${i + 1}. ${patients[i]}\n`
  }
  listPatient.innerText = list
  form.inName.value = ""
  form.inName.focus()
})

form.inUrgency.addEventListener("click", () => {
  if (!form.checkValidity()) {
    alert("inform the patient name")
    form.inName.focus()
    return
  }

  const name = form.inName.value
  patients.unshift(name)
  let list =""

  patients.forEach((patient, i) => (list += `${i +1}. ${patient}\n`))
  listPatient.innerText = list
  form.inName.value=""
  form.inName.focus()
})

form.inAttend.addEventListener("click", ()=> {
  if(patients.length == 0 ){
    alert("Don't have patient in await list")
    form.inName.focus()
    return
  }

  const attend = patients.shift()
  inCare.innerText = attend
  let list = ""
  patients.forEach((patient, i)=> (list += `${i +1}. ${patient}\n`))
  listPatient.innerText = list
})
