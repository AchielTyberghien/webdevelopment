const setup = () => {
    const button = document.getElementById("button");
    button.addEventListener("click",spatie)

}
const spatie = () => {
    let spatie = document.getElementById("text").value
    maakMetSpaties(spatie)
}
const maakMetSpaties = (spatie) => {
    let woord = spatie.split("")
    let result = ""
    for (let i = 0; i < woord.length; i++) {
        result += woord[i] + " "
    }
    console.log(result);
}
window.addEventListener("load", setup);