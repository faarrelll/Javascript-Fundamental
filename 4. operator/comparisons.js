// operator perbandingan

// 1. Operator == hanya dicek nilainya sama atau tidak
// 2. Operator === akan dicek nilai dan type datanya juga

let x = 9;
let y = "9";

console.log(x == y); // true
console.log(x === y); // false

// greater than >
// less thab <
// greter than or equal >=
// less than or equal <=

const condition = true || false;
console.log(condition);

const string1 = "BA";
const string2 = "AB";
console.log("bandingin ASCII: ", string1 < string2); //dibandingin ASCII

// ?? -> null coalescing
let number;
console.log(number ?? "kosong");
console.log(number ? number : "kosong");
