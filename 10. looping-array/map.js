const heroes = ["Miya", "Brodi", "Irithel"];

//jika map bisa disimpan datanya, dan diubah, walau datanya diubah tidak akan mempengaruhi base datanya
const newHeroes = heroes.map((hero,index) => {
    if(hero === "Miya"){
        hero = "wanwan"
        return hero
    }
    return hero
    // console.log(`value ${hero} : index ${index}`);
})

console.log(heroes)
console.log(newHeroes)