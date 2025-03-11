function GanjilGenap(input) {
  let i = input;

  for (let x = 1; x < i; x++) {
    if (x % 2 === 0) {
      console.log(`${x} adalah genap`);
    } else {
      console.log(`${x} adalah ganjil`);
    }
  }
}

GanjilGenap(6);
