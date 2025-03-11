// if (condition) {
//   //statement
// }

let grade = 10;

if(grade > 8) {
  console.log("Good!");
} else if (grade > 6) {
  console.log("lumayan lah");
} else {
  console.log("kurang belajar bray");
}

//ternary
const check = grade > 8 ? "Good!" : grade > 6 ? "Lumayan Lah" : "Kurang belajar bray";

console.log(check);
