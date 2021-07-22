const lists = [4, 2, 1, 4, 6, 8, 7]

//所有元素累加 => 32
// let e =0
// for (let i = 0; i < lists.length; i++) {
//     e =e + lists[i]
// }
// console.log(e)

let total = 0
lists.forEach((x) => {
    total += x
} )
console.log(total);