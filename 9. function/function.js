//membuat function di JS
// function namaFunction(params) {
//     //statement
// }

function exampleFunction() {
    console.log('Ini Function')
}

exampleFunction();

let name = "farrel";

// functionnya jadi bisa nerima parameter dengan tipe data apapun, jadi perlu divalidasi
function greeting(name) {
    console.log(`Halo ${name}`); // template lateral
    console.log("Halo " + name); // diubah ke string
    console.log("Halo", name); // tidak diubah ke string dan otomatis memberi spasi
}

// ini untuk validasinya
function checkString(params) {
    if(typeof params === "string"){
        return true
    } else{
        return false
    }
}
checkString(name)?greeting(name):console.log("Tidak sesuai")

function argument() {
    console.log(arguments)
    console.log(arguments[1])
}

argument("Farrel","Yuda","King")

function argument2() {
    console.log(arguments)
    console.log(arguments[1])
}

argument2("Farrel","Yuda","King")