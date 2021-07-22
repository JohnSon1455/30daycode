const lists = [4, 2, 1, 4, 6, 8, 7]

// // 用 for 迴圈
// for (let i = 0; i < lists.length; i++){
//     lists[i] *= 2; 
//     // console.log(lists[i] * 2);        
// }
// console.log(lists);
// // 印出 [8, 4, 2, 8, 12, 16, 14]
// const lists = [4, 2, 1, 4, 6, 8, 7]

// // 用 for 迴圈
// function d(n){
//     return n * 2
// }
//     // console.log(lists[i] * 2);        
// let result =lists.map(d)
// console.log(result);
// // 印出 [8, 4, 2, 8, 12, 16, 14]
// 用 for 迴圈
function double(n){
    return n * 2
}
    // console.log(lists[i] * 2);        
let result =lists.map(double)
console.log(result);
// 印出 [8, 4, 2, 8, 12, 16, 14]

