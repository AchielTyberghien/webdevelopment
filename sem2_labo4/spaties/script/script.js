const setup = () => {
    const button = document.getElementById("button");
    button.addEventListener("click",spatie)
}
const spatie = () => {
    let spatie = document.getElementById("text").value
    maakMetSpaties(spatie)
}
const maakMetSpaties = (spatie) => {
    let result = ""
    while (spatie.includes(" ") === true){
        spatie = spatie.replace(" ","")
    }
    for (let i = 0; i < spatie.length; i++) {
        result += spatie.charAt(i) + " "
    }
    console.log(result);
}
window.addEventListener("load", setup);