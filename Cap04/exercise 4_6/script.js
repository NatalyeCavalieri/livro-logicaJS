// In a certain moment of day, only bills of 10, 50 and 100 are available at an terminal of electronic box. Create a program that read a value of withdrawal of a client, check its valid (in other word, if can pay with the notes available) and inform the minimum number of 100, 50 e 10 bills needed fullfil this withdrawal.


const form = document.querySelector("form")
const responseBills100 = document.querySelector(".bills1")
const responseBills50 = document.querySelector(".bills2")
const responseBills10 = document.querySelector(".bills3")


form.addEventListener("submit", (e)=>{
  e.preventDefault()

  const Withdrawal = Number(form.inValue.value)

  if(Withdrawal % 10 != 0){
    alert("Value invalid to bills available (10, 50 and 100 R$)")
    form.inValue.focus()
    return
  }

  const bills100 = Math.floor(Withdrawal / 100)
  let rest = Withdrawal % 100

  const bills50 = Math.floor(rest / 50)
  rest = rest % 50

  const bills10 = Math.floor(rest / 10)
  if(bills100 > 0){
    responseBills100.innerText = `Bills of 100 R$: ${bills100}`
  }
  if(bills50 > 0){
     responseBills50.innerText = `Bills of 50 R$: ${bills50}`
  } 
  if(bills10 > 0){
    responseBills10.innerText = `Bills of 10 R$: ${bills10}`
  }
})