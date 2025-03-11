let number = 25; // number
let string = "ini String"; // string
let boolean = true; // bollean
/*
    null -> value kosong
    undefined -> tidak punya value
*/  
let kosong = null; // null
const pi = 3.14; // constant

let person;
console.log(person === kosong) // false
console.log(person == kosong) // true

// == : cuma nilainya
// === : nilainya dan tipe datanya (strict)

//object
let person2 = {
    name: "farrel",
    age: 34,
    address: {
        street: "Jl. Topaz",
        city : "Malang",
        region: {
            province: "Jawa Timur",
            country:  "Indonesia",
            location: ['1.212121212','7.21312312312']
        }
    }
}

console.log(person2)
