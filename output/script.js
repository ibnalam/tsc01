"use strict";
// type strimgOrnum = string | number
Object.defineProperty(exports, "__esModule", { value: true });
// const userDetailes = (
//     id:strimgOrnum, 
//     user: {
//         name: string; 
//         age: number
//     }
// ) => {
//     console.log(`User id is ${id} name is ${user.name}, and age is ${user.age}` );
// }
// let calculation: (a: number, b: number, c: string) => number;
// calculation = (a: number, b: number, c: string) => {
//     if(c == "add"){
//         return a + b
//     }else {
//         return a - b
//     }
// }
// console.log(calculation(5, 6, "minus"));
// warking with classes  //////////
// class player {
//     name: string;
//     age: number;
//     country: string;
//     constructor(n: string, a: number, c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){
//         console.log(`${this.name} from ${this.country} is playing!`);
//     }
// }
// const arafat = new player("arafat", 40, "bangladesh")
// const ibne = new player("ibne", 30, "bangladesh")
// const mejan = new player("mejan", 20, "bangladesh")
// // console.log(ibne.name);
// const players: player[] = [];
// players.push(ibne)
// players.push(arafat)
// players.push(mejan)
//  Access Modifiers/////////
const player_js_1 = require("./classes/player.js");
const arafat = new player_js_1.player("arafat", 40, "bangladesh");
const ibne = new player_js_1.player("ibne", 30, "bangladesh");
const mejan = new player_js_1.player("mejan", 20, "bangladesh");
console.log(ibne.name);
const players = [];
players.push(ibne);
players.push(arafat);
players.push(mejan);
function drawRectabgle(options) {
    let width = options.width;
    let length = options.length;
}
drawRectabgle({
    width: 30,
    length: 20
});
// working with interface ///////
