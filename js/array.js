console.group("Arrays");
const u1 = "Jonas";
const u2 = "Petras";
const u3 = "Adomas";

// Array liet. masyvas
//    indexai     0        1          2
const names = ["Jonas", "Petras", "Adomas"];
console.log("names ===", names);
names[1];
console.log("names[1]; ===", names[1]);

const numbers = [1, 5, 9, 12];
console.log("numbers ===", numbers);

console.log(numbers[3]);

// ivairiu tipu masyvas

const mixed = [45, "James", true, null, [5, 6]];
console.log("mixed ===", mixed);
console.log(mixed[4][1]);

const matrix = [
  [1, 2, 3, 4], // i === 0
  [5, 6, 7, 8], // i === 1
  //0  1   2   3
  [9, 10, 11, 12], // i === 2
];

console.log(matrix[2][2]);

const colors = ["red", "green", "blue", "violet", "black"];

for (i = 0; i <= 4; i++) {
  console.log(colors[i]);
}
console.groupEnd("Arrays");
