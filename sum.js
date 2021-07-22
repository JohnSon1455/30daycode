const heroes = [
    { name: "悟空", power: 500 }, 
    { name: "克林", power: 80 }, 
    { name: "達爾", power: 450 }, 
    { name: "18號", power: 700 }
  ]
  
  // 計算所有人的戰鬥力總和
// let r = heroes.reduce((acc,heroes) =>{
//     return acc + heroes.power
// }, 0)
// console.log(r);


let r = heroes.reduce((acc,heroe) =>{
      if (heroe.power > acc){
       return heroe.power
    }else{
        return acc
    }
   
}, 0)
console.log(r);

// let top = 0
// let result = heroes.map(x => {
//         if (x.power > top) {
//         top = x.power
//     } else {
//         return x.power
//     }
// }) 
// console.log(top)