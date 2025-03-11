// Arrow Function

// const namaFunction = () => {
//     // statement
// } tanda () tempat untuk parameter


// kenapa sering menggunakan const, karena kan js buat frontend, jadi  datanya dari backend, jadi untuk menghindari data berubah yaitu menggunakan const
const addition = (a, b) => {
  return a + b;
};

//kemudian perbedaan arrow function dengan regular function adalah arrow function tidak bisa dihoisting.
//jadi jika memanggil function harus dibawah deklarasi function, tidak boleh sebelum deklrasi function
const substract = (a,b) => a-b;

console.log("Penjumlahan "+addition(5,7))
console.log("Pengurangan "+substract(5,7))


function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);
  // Expected output: 20
  

  const person = {
    username : "farrel",
    age : 34,
    arrowFunction : () => {
        console.log("hallo nama saya "+ person.username)
    }
  }

  person.arrowFunction();