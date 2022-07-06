let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetBtn = document.getElementById("reset-btn")

const restartCount = () => {
  count = 0
  countEl.textContent = 0
}

const increment = () => {
   count++
   countEl.innerText = count
} 

const save = () => {
  let saveCount = count + ' - '
    saveEl.textContent += saveCount
    saveEl.style = "block";
      restartCount()
}

const end = () => {
  restartCount()
  if(saveEl.textContent === 'Previous entries: '){
    saveEl.style = "block";
  }
   if(saveEl.textContent.charAt(saveEl.textContent.length-2) === '-')  {
      saveEl.textContent = saveEl.textContent.slice(0, -2)
  }
      saveEl.textContent += 'End of the turn'
      document.querySelector("#increment-btn").disabled = true
      document.querySelector("#save-btn").disabled = true
      document.querySelector("#end-btn").disabled = true
      resetBtn.style = "block"

}

const reset = () => {
  restartCount()
  saveEl.textContent = 'Previous entries: '
  saveEl.style = "display:none";
    document.querySelector("#increment-btn").disabled = false
    document.querySelector("#save-btn").disabled = false
    document.querySelector("#end-btn").disabled = false
      resetBtn.style = "display:none"
}

