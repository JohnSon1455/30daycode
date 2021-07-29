document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#productArea").addEventListener("click", (e) => {
      e.preventDefault()
      const icon = e.target;
      const data = icon.dataset;
      const id = data.productId;
      const li = document.createElement('li');
      li.textContent = id;
      const area = document.querySelector('.list');
      if(id){
        area.appendChild(li)
        console.log('can add shop list')
      }
      else {
          console.log('cant add')
      }
    })
  })