// membuat object secara ad-hoc (spontant)
// tidak membuat clas terlebih dahulu
const person = {};

// class adalah blupeint dari object
class User {
  //bisa menulis atribut
  username;
  age;
  #nik;

  constructor(username, age,nik) {
    this.username = username;
    this.age = age;
    this.#nik = nik;
    //bisa langsung di deklarasikan di constructor
    this.job = "student";
    Object.seal(this); // mencegah penambahan attribute baru
    // Object.freeze(this) ini untuk mencegah perubahan apapun pada property class
}

  getNik(){
    return this.#nik
  }

  setJob(job){
    this.job = job
  }

}

const farrel = new User("farrel", 22, "4567890432617893043");
console.log(farrel);
farrel.setJob("Kuli Ketik")
// farrel.sallary(999999999) aka error jika diber 'Object.seal(this)'
console.log(farrel);
console.log(farrel.getNik());

