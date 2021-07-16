document.addEventListener("DOMContentLoaded", () => {
     const btn = document.querySelector('#btn')
     const h = document.querySelector("#hi")
     btn.addEventListener("click", () => {
        h.innerHTML = 456
     })
    // const h = document.querySelector("#hi")
    //   setTimeout(() => {h.innerHTML = 456}, 3000)
  })