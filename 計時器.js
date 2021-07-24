                                               
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#start-btn")
    const display = document.querySelector("#timer") 
    let running = false
    let number = 0
    let interval
  
    button.addEventListener("click", () => { 
  
      if(!running) {
        interval = setInterval(() => {
          number = number + 1
          display.innerText = `${number}`
        }, 1000)
        button.innerText = "暫停"
        running = true
      } else {
        clearInterval(interval)
        running = false
        button.innerText = "繼續"
      }
    })
  })      