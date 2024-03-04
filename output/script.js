"use strict";
// type strimgOrnum = string | number
// const userDetailes = (
//     id:strimgOrnum, 
//     user: {
//         name: string; 
//         age: number
//     }
// ) => {
//     console.log(`User id is ${id} name is ${user.name}, and age is ${user.age}` );
// }
let calculation;
calculation = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
