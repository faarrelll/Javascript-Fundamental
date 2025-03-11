//Pass by value

let age = 25;
console.log(age);
age = 30;
console.log(age);

let year = 2024;
year = 2025;
console.log(year);

//Pass by reference
//hanya berlaku di collection seperti array dan object
const gosling = {
  className: "Gosling",
  batch: 5,
};

// ini spread operator
const torvalds = { ...gosling };

torvalds.className = "Torvalds";

console.log("gosling", gosling);
console.log("torvald", torvalds);

//contoh spread penggunaan spread operator
const spreadObject = [{ ...gosling }, { ...torvalds }];
console.log(spreadObject);
