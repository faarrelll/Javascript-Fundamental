// Definisi objek user
const user = {
    username: "farrel",
    age: 22,
    email: "farrelakbar432@gmail.com",
    address: {
        city: "Malang",
        country: "Indonesia",
        street: {
            name: "Jl. Sawoajajar",
            blok: ["c7", "i4"]
        }
    },
    hobbies: ["coding", "reading"],
    greeting: function () {
        return "Hello " + this.username;
    },
};

// Menampilkan keseluruhan objek user dengan memformat properti blok
const userFormatted = {
    ...user,
    address: {
        ...user.address,
        street: {
            ...user.address.street,
            blok: user.address.street.blok.join(", ") // Gabungkan nilai array blok menjadi string
        }
    }
};

console.log(userFormatted);

// Menampilkan informasi alamat secara spesifik
// console.log(
//     `Address: ${user.address.street.name}, Blok: ${user.address.street.blok.join(", ")}`
// );

// Menampilkan informasi lengkap dan menyapa user
console.log(user.greeting());
