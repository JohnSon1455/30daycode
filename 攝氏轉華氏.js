// 攝氏 c = 5/9 x (華氏溫度 - 32)
// 華氏 f = (攝氏) x (9/5) + 32
// function c2f (t){
//     var f = t *( 9/5 ) + 32
//     return f
// }
//   console.log(c2f(85))

const c2f = t => (9 / 5) * t + 32;
 console.log(c2f(85))