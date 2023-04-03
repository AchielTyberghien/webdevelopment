let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMG_PREFIX: "images/",
    IMG_SUFFIX: ".png",
    lijstselected: []
}
const setup = () => {
    setupVeld()
}
const setupVeld = () => {
    const veld = document.querySelector(".speelveld");
    const stapel = [];
    aanmakenkaarten().forEach((kaart) => {
        stapel.push(kaart)
    })
    aanmakenkaarten().forEach((kaart) => {
        stapel.push(kaart)
    })
    let lengte = stapel.length;
    while (lengte > 0) {
        let index = Math.floor(Math.random() * lengte);
        veld.appendChild(stapel[index]);
        stapel.splice(index,1);
        lengte = stapel.length;
    }
}
const aanmakenkaarten = () => {
    const deelstapel = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        let kaart = global.IMG_PREFIX + "achterkant" + global.IMG_SUFFIX;
        let kaartVak = document.createElement("div");
        let element = document.createElement("img");
        kaartVak.appendChild(element);
        element.setAttribute("src", kaart);
        element.setAttribute("value", i.toString())
        element.classList.add("size")
        element.addEventListener("click",geselecteeerdkaarten)
        deelstapel.push(kaartVak);
    }
    return deelstapel
}
const geselecteeerdkaarten = (event) => {
    let target = event.target
    let lijst = global.lijstselected
    if(lijst.length=== 0){
        lijst.push(target)
    }else if(lijst.length === 1 && !(lijst[0] === target)){
        lijst.push(target)
        if(lijst[0].getAttribute("value") === target.getAttribute("value")){
            match()
        }else{
            toonkaarten()
        }
    }
}
const match = () => {
    global.lijstselected.forEach((kaart) => {
        let value = kaart.getAttribute("value")
        kaart.setAttribute("src",global.IMG_PREFIX + "kaart" + value + global.IMG_SUFFIX)
    })
    setTimeout(aftercorect,5000)
}
const toonkaarten = () => {
    let lijst = global.lijstselected
    lijst.forEach((kaart) => {
        let value = kaart.getAttribute("value")
        kaart.setAttribute("src",global.IMG_PREFIX + "kaart" + value + global.IMG_SUFFIX)
    })
    setTimeout(aftertimeout,5000)

}
const aftertimeout = () => {
    let lijst = global.lijstselected
    lijst.forEach((kaart) => {
        kaart.setAttribute("src",global.IMG_PREFIX + "achterkant" + global.IMG_SUFFIX)
    })
    global.lijstselected = []
}
const aftercorect = () => {
    let lijst = global.lijstselected
    lijst.forEach((kaart) => {
        kaart.remove()
    })
    global.lijstselected = []
}


    window.addEventListener("load", setup);