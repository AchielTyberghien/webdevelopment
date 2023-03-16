const setup = () => {
    const woord = "onoorbaar"
    for (let i = 0; i < woord.length -2; i++) {
        let trigram = ''
        trigram = woord.substring(i, i+3)
        console.log(trigram)
    }
}
window.addEventListener("load", setup);