const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", display);
}
const display = () => {
    let roker = document.getElementById("roker").checked;
    let taalbox = document.getElementsByClassName("taal");
    let taal = Array.from(taalbox);
    for (let i = 0; i < taal.length; i++) {
        taal[i] = taal[i].checked;
    }
    let buurland = document.getElementById("buurland").value;
    let bestellingselector = document.getElementById("bestelling").children;
    let bestelling = Array.from(bestellingselector);
    for (let i = 0; i < bestelling.length; i++) {
        bestelling[i] = bestelling[i].selected;
    }
    if (roker){
        console.log("is een roker")
    }else{
        console.log("is geen roker")
    }
    if (taal[0]){
        console.log("moedertaal is nl")
    }else if (taal[1]){
        console.log("moedertaal is fr")
    }else{
        console.log("moedertaal is en")
    }
    if (buurland === "Nederland"){
        console.log("favoriete buurland is Nederland")
    }else if (buurland === "Frankrijk"){
        console.log("favoriete buurland is Frankrijk")
    }else{
        console.log("favoriete buurland is Duitsland")
    }
    let order = "besteling bestaat uit"
    if (bestelling[0]){
        order += " aardappelen"
    }
    if (bestelling[1]) {
        order += " brood"
    }
    if (bestelling[2]){
        order += " melk"
    }
    if (bestelling[3]){
        order += " biefstuk"
    }
    if (bestelling[4]){
        order += " chips"
    }
    if (bestelling[5]){
        order += " krant"
    }
    console.log(order)




}
window.addEventListener("load", setup);