// const lists = [4, 2, 1, 4, 6, 8, 7]

// // // 把大於 3 的數字乘以 3 倍
// // [12, 2, 1, 12, 18, 24, 21]
// // 使用 HOF
// function T(c){
//     if(c > 3){
//         return c * 3
//     }else{
//         return c
//     }
// }
// let result =(lists.map(T))

// console.log(result);
// const lists = [4, 2, 1, 4, 6, 8, 7]

// console.log(lists.map((x) => {return x > 3 ? x * 3 : x}))

const lists = [4, 2, 1, 4, 6, 8, 7]

// 把大於 3 的數字乘以 3 倍
// [12, 2, 1, 12, 18, 24, 21]
// 使用 HOF
function moreThan3(c){
    if(c > 3){
        return c * 3
    }else{
        return c
    }
}
let result = lists.map(moreThan3)
console.log(result)