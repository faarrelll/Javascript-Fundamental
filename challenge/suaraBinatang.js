function getSound(input) {

    switch (input.toLowerCase()) {
        case "kucing" :
            console.log("meow")
            break;
        case "anjing" :
            console.log("guk")
            break
        case "sapi" :
            console.log("moo")
            break
        default:
            break;
    }
}

getSound("kucing");
getSound("anjing");
getSound("sapi");
getSound("Kucing");
getSound("AnJinG");
getSound("sapI");