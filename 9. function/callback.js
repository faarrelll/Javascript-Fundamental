// callback function
// sebuah fungsi yang menerima fungsi sebagai parameter


const process = (fn) => {
    return fn()
}

const enigma = (fn) => {
    return fn();
}

const gosling = () => {
    return "Ini Gosling";
}

console.log(process(()=> enigma(gosling)))