document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#productArea").addEventListener("click", (e) => {
      let link = e.target
      let data = link.dataset
      console.log(data)
      // 實作寫在這裡
     
    })
  })