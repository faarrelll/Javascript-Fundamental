const heroes = ["Miya", "Brodi", "Irithel"];

//filter return array semua nilai yang memenuhi kondisi
const filteredHeroes = heroes.filter((hero,index) => {
    return hero.length > 4
})
console.log(filteredHeroes)

//cara manual filteredHeroes
const arrayFiltered = []

for (let i = 0; i < heroes.length; i++) {
    const currentHero = heroes[i];
    if(currentHero.length > 4){
        arrayFiltered.push(currentHero)    
    }
}

console.log(arrayFiltered)


//Find mengembalikan string
//find mengembalikan nilai pertama yang memenuhi kondisi
const findHero = heroes.find((hero,index)=>{
    return hero.length>4
})

console.log(findHero)