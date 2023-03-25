const setup = () => {
 let button = document.querySelector("button")
    button.addEventListener("click", maakP)
}
const maakP = () => {
    let div = document.querySelector("div")
    let p = document.createElement("p")
    let text = document.createTextNode("some text")
    p.appendChild(text)
    div.appendChild(p)
}
window.addEventListener("load", setup);