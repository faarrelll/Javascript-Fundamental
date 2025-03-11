const heroes = ["Miya", "Brodi", "Irithel"];

//for biasa
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

//for each
heroes.forEach((element) => {
  console.log(element);
});

heroes.forEach((element) => {
    if(element === "Brodi"){
        console.log(element);
    }
});
heroes.forEach((element, index) => {
    console.log(`value ${element} : index ${index}`);
});

