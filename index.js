// // import { carNames } from './app'
// const app = require('./app')
// var colors = require('../safe');

var colors = require('colors');
colors.enable();
// colors.disable();
// var name = 'Marak';
// console.log(colors.red('Hello %s'), name);
// // for (index = 0; index < app.carNames.length; index++) {

// //     if (app.carNames[index] === "Fruit") {
// //         console.log("this is not a car");
// //     } else {
// //         console.log(app.carNames[index]);
// //     }
// // }
// // console.log(app.func(12, 12))

// const fruits = [4, 34, 1, 2, 3];

// let u = fruits.filter((number) => {
//     return number <= 4;
// });
// console.log(u);


// const fs = require('node:fs').writeFileSync;

// fs("user_file.txt", "Hello everyone, this is my dadadasdasata");

// console.log(__filename)

// const http = require("http");


// const getJson = (text) => {
//     return JSON.stringify({ status: text });
// }
// console.log(http.STATUS_CODES);
// console.log(colors.yellow('First some yellow text'));

// http.createServer((request, response) => {
//     // request.headers;
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     const jsonResponse = getJson("Lmfao :3");
//     response.write(jsonResponse);
//     response.end();

// },).listen(8000);

// http.get()


console.log("Hii".bgBlack.green);