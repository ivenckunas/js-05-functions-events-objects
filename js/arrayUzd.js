"use strict";

const pav = ["apple", "sister", "hammer", "sun", "table", "sky", "lake"];
const pglb = ["in", "with", "on", "my", "is", "a", "the", " "];

// atspausdinti is masyvu

// 1. my sister is in the lake
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister

// const lake = pglb[3] + pglb[7] + pav[1] + pglb[7] + pglb[4] + pglb[7] + pglb[0] + pglb[7] + pglb[6] + pglb[7] + pav[6];
// console.log("lake ===", lake);

// const hammer = pav[2] + pglb[7] + pglb[4] + pglb[7] + pglb[2] + pglb[7] + pglb[6] + pglb[7] + pav[4];
// console.log("hammer ===", hammer);

// const sun = pav[3] + pglb[7] + pglb[4] + pglb[7] + pglb[0] + pglb[7] + pglb[6] + pglb[7] + pav[5];
// console.log("sun ===", sun);

// const apple = pav[0] + pglb[7] + pglb[4] + pglb[7] + pglb[1] + pglb[7] + pglb[1] + pglb[7] + pglb[3] + pglb[7] + pav[1];
// console.log("apple ===", apple);

let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 55];
console.log(numbers[numbers.length - 1]);

// atspausdinti visus skaicius is bet kokio ilgio masyvo
for (let i = 0; i < numbers.length; i++) {
  console.log(`skaicius ${numbers[i]}`);
}
