function fizzBuzz() {
  let angka = 20;
  for (let i = 1; i <= angka; i++) {
    
    if (i % 5 === 0 && i % 2 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else if (i % 2 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
