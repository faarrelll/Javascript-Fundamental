// Latihan
// 1. Mengubah array  [1,2,3,4] -> [2,4,6,8]
// cara for manual
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2;
}
console.log(arr);

//pakai map (tapi harus menggunakan let)
let arr2 = [1, 2, 3, 4];
arr2 = arr2.map((value) => {
  return value * 2;
});
console.log(arr2);

// 2. Ubah tipe data string jadi number ["1", "2", "3", "4"] -> [1,2,3,4]
const arr3 = ["1", "2", "3", "4"];
console.log("Sebelum diubah", arr3);
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = Number(arr3[i]);
}
console.log("Setelah diubah", arr3);

// simulasi findBy
const products = [
  { id: 1, name: "coba", price: 10000 },
  { id: 2, name: "aku", price: 10000 },
  { id: 3, name: "kamu", price: 10000 },
  { id: 4, name: "dia", price: 10000 },
  { id: 5, name: "mereka", price: 100 },
];
// find product by
// 1. name
const findByName = (name) =>
  products.find((value) => value.name === name) ?? "tidak ada bro";

const coba = findByName("coba");
console.log(coba);
const mereka = findByName("");
console.log(mereka);
// 2. price
const findByPrice = (price) =>
  products.find((value) => {
    if (value.price === price) {
      return value;
    }
  }) ?? "tidak ada bro";

const coba2 = findByPrice(100);
console.log(coba2);
const kosong = findByPrice();
console.log(kosong);
// 3. id

const findById = (id) =>
  products.find((value) => {
    if (value.id === id) {
      return value;
    }
  }) ?? "tidak ada bro";

const coba3 = findById(1);
console.log(coba3);
const kosong2 = findById();
console.log(kosong2);
