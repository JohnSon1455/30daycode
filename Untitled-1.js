document.addEventListener("DOMContentLoaded", () => {
    const x = document.querySelector(".list");
    const y = document.querySelectorAll(".list");
    console.log(x);
    console.log(y);
    y.forEach((el) => {
        if((el.innerText) >= 3){
            el.innerText = "zz";
        }
    });
  });