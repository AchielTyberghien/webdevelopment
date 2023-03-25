const setup = () => {
    let oldp = document.querySelectorAll('p')[0]
    let innerp = document.createTextNode("Good Job!")
    let pnode = oldp.childNodes[0]
    oldp.replaceChild(innerp,pnode)
}
window.addEventListener("load", setup);