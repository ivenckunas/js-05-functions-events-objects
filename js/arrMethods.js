"use strict";

// masyvu metodai

const colors = ["green", "blue", "red"];
console.log(colors);

// array.push() prideti i masyvo gala
const pushResult = colors.push("violet");
console.log("pushResult ===", pushResult);
console.log(colors);

// array.unshift() prideti reiksme i masyvo prieki
const unshiftResult = colors.unshift("white");
console.log("unshiftResult ===", unshiftResult);
console.log("colors ===", colors);

// array.shift() prideti reiksme i masyvo prieki
const shiftResult = colors.shift();
console.log("shiftResult ===", shiftResult);
console.log("colors ===", colors);

// array.pop() nutrina paskutini elementa
const popResult = colors.pop();
console.log("popResult ===", popResult);
console.log("colors ===", colors);

// array.slice(start, finish) - nemodifikuoja orginalo
let sliceResult = colors.slice(2, 5);
sliceResult = colors.slice(2);
sliceResult = colors.slice(-2);
console.log("sliceResult ===", sliceResult);
console.log("colors po slice ===", colors);

console.log("typeof colors ===", typeof colors);
console.log("Ar tai yra masyvas ===", Array.isArray(colors));
