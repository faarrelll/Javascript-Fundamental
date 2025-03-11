// function sum(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let result = 0;

//       result = a + b;
//       console.log("sum", result);
//       resolve(result);
//     }, 4000);
//   });
// }

// function multiply(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let result = 0;

//       result = a * b;
//       console.log("multiply", result);
//       resolve(result);
//     }, 100);
//   });
// }

// function subtract(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let result = 0;

//       result = a - b;
//       console.log("subtract", result);
//       resolve(result);
//     }, 200);
//   });
// }

// sum(5, 7)
//   .then((result) => multiply(result, 5))
//   .then((result) => subtract(result, 10))
//   .finally(() => console.log("selesai"));

// Latihan: simulasi lampu jalan,
//merah (5 detik), kuning(1 detik), hijau(3 detik)

function red() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lampu Merah");
      resolve();
    }, 5000);
  });
}
function yellow() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lampu Kuning");
      resolve();
    }, 1000);
  });
}
function hijau() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lampu Hijau");
      resolve();
    }, 3000);
  });
}

red()
  .then(() => yellow())
  .finally(() => hijau());
