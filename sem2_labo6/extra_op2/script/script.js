const setup = () => {
    let li = document.querySelectorAll("li")
    let style = document.createElement("style")
    let head = document.querySelector("head")
    let red = document.createTextNode(".listitem{color: red;}")
    let body = document.querySelector("body")
    head.appendChild(style)
    style.appendChild(red)
    for (let i = 0; i < li.length; i++) {
        li[i].classList.add("listitem")
    }
    let img = document.createElement("img")
    img.setAttribute("src", "image/IMG_9137.PNG")
    body.appendChild(img)
}
window.addEventListener("load", setup);