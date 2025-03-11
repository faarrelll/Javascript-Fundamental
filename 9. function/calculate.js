//contoh penggunaan callback

const calculate = (a, b, operation) => {
  return operation(a, b);
};

const addition = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return a / b;
};

const multiply = (a, b) => {
  return a * b;
};

console.log(calculate(10, 5, addition));
console.log(calculate(10, 5, substract));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 5, multiply));

//String manipulation
const stringManipulation = (text, operation) => {
  return operation(text);
};

const upperString = (text) => {
    return text.toUpperCase();
}

const lowerString = (text) => {
    return text.toLowerCase();
}

const getFirstLetter = (text) => {
    return text.charAt(0);
}

console.log(stringManipulation("gosling",upperString))
console.log(stringManipulation("gosling",lowerString))
console.log(stringManipulation("gosling",getFirstLetter))