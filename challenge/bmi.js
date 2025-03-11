const rifky = {
    name: "rifky",
    berat: 70,
    tinggi: 170
}
const robby = {
    name: "robby",
    berat:70,
    tinggi: 160
}
const bmi = (berat, tinggi) => berat/(tinggi*2)

const result = bmi(rifky.berat,rifky.tinggi) > bmi(robby.berat, robby.tinggi) ? true : false; 

result ? console.log("BMI Rifky Lebih Tinggi Dari BMI Robby"): console.log("BMI Robby Lebih Tinggi Dari BMI Rifky");