const condition = true; // boolean murni
const numberCondition = 0 > 3;

//truthy -> ketika variable memiliki nilai
// falsy -> ketika value 0, kosong undefined, null, nan
const person = {}

// untuk cek object kosong atau tidak
if(Object.keys(person).length === 0){
    console.log("truthy")
}
const arr = []
console.log(arr.length)
if (NaN) {
  console.log("truhty");
}
