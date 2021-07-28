const f = ["Ryan", "Kieran", "Mark"]

// function friend(friends) {
//     if (friends.length === 4) {
//     return friends
//   }
// }

// console.log(f.filter(friend))
function friend(friends){
    console.log(friends.filter(name => name.length === 4));
}

friend(f)