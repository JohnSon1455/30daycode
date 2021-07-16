
// 規則：
// 如果是 3 的倍數，換成 'Fizz'
// 如果是 5 的倍數，換成 'Buzz'
// 如果是 3 而且也是 5 的倍數，換成 'FizzBuzz'

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

 for (let x = 0; x < 16; x++) {
    
    if ((x + 1) %(3*5) == 0) list[ x ]='FizzBuzz'

    if ((x + 1) % 3 == 0 && (x + 1) % 5 != 0) list[ x ]='Fizz'
    
    if ((x + 1) % 5 == 0 && (x + 1) % 3 != 0) list[ x ]='Buzz'

}


// 實作寫在這裡...

console.log(list);
// 印出 [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']