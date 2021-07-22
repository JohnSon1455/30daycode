// // 印出大於 4 的數字的平方和
const lists = [4, 2, 1, 4, 6, 8, 7]

// const reducer = (accumulator, currentValue) => accumulator + currentValue**2;

// 印出大於 4 的數字的平方和
// const lists = [4, 2, 1, 4, 6, 8, 7]

// let SumSquaresThan4 = lists.filter((x) => x > 4).map((x) => x * x)
// console.log(SumSquaresThan4.reduce((acc,current) => {
//   return acc + current
// }))
let r = lists.filter(n => n >4)
             .map(n => n * n)
             .reduce((acc,v) => acc + v)
console.log(r)             