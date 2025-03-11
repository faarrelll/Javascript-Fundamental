let numbers = [1, 2, 3, 4, 5];
let names = ["farrel", "yuda", "Kingkong"];
// bisa apapun
let mixed = [
    1,
    "text",
    true,
    undefined,
    null,
    {name : "farrel", age : 24},
    [1,2,[3,4,5]],
    function hello() {
        return "hello"
    }
]
// console.log(mixed[7])

// object key-value
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
        },
    },
    function: function name() {
        console.log("hello")
    }
}

//error
person2.function();

// akses attribute
console.log(person2?.address?.region?.province)