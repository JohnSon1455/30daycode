檢查傳入的引數是否為某數的平方

function isSquare(num) {
let n =  Math.sqrt(num);
// 實作寫在這裡...
if(n % 1 == 0){ 
    return true
  }else{
    return false
  }
}
function isSquare(num) {
  let n = (num)^0.5
  // 實作寫在這裡...
  if(n % 1 == 0){ 
    return true
  }else{
    return false
  }
  }
  console.log(isSquare(0))   // 印出 true
  console.log(isSquare(4))   // 印出 true
  console.log(isSquare(5))   // 印出 false
  console.log(isSquare(25))  // 印出 true
  console.log(isSquare(26))  // 印出 false