function Urutan() {
  let arr = ["warung", "ke", "jalan", "saya"];
  let temp;
  let length = arr.length
  for (let i = 0; i < length/2; i++) {
        temp = arr[length-i-1]
        arr[length-i-1] = arr[i]
        arr[i] = temp
  }
  return arr;
}

console.log(Urutan())