// contoh callback hell

function sum(a, b, func) {
  setTimeout(() => {
    let result = 0;

    result = a + b;
    func(result);
  }, 4000);
}

function multiply(a, b, func) {
  setTimeout(() => {
    let result = 0;

    result = a * b;
    func(result);
  }, 100);
}

function subtract(a, b, func) {
  setTimeout(() => {
    let result = 0;

    result = a - b;
    func(result);
  }, 200);
}

function printResult(result) {
  console.log("result", result);
}

sum(10, 5, (result) =>
  multiply(result, 5, (multy) =>
    subtract(multy, 10, (result) => printResult(result))
  )
);
