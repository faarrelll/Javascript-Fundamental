const user = {
  username: "farrel",
  age: 22,
  email: "farrelakbar432@gmail.com",
  address: {
    city: "Malang",
    country: "Indoesia",
    street: {
      name: "Jl. Sawoajajar",
      blok: ["c7", "i4"],
    },
  },
  hobbies: ["coding", "reading"],
  greeting: () => {
    return "Hello " + user.username;
  },
};

// module.exports = user; ini cara common js

//ini cara di eslint6
export default user