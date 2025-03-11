const enigma = {
  className: "Gosling",
  batch: 5,
  student: 16,
  address: {
    street: "Jl. Topaz",
    city: "Malang",
  },
};

//Destructuring : Ekstrak attribute dari object
let {className, batch, student, address: {street,city}} = enigma
// console.log(address) bisa dipanggil jika street dan city tidak di destucture
console.log(street)

const {...spreadEnigma} = enigma
console.log(spreadEnigma.className)
console.log(spreadEnigma)

//Destucturing Array
const fruits = ["apple", "banana", "semangka"]
// dia nunjuk indexnya, dan harus
const [fruits1, ...restFruits] = fruits
console.log(fruits1)
console.log(restFruits)