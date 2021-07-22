document.addEventListener("DOMContentLoaded",() =>{
    const btn = document.querySelector("#start-btn")
    const time = document.querySelector("#timer")
    btn.addEventListener("click",() =>{
        setInterval(() => {
            time.innerHTML++
        }, 1000);
    })
})