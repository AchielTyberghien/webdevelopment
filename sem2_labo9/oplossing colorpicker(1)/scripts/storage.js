

const storeSliderValues = () => {
    let slidervalue = {
        red : document.querySelector("#sldRed").value,
        green : document.querySelector("#sldGreen").value,
        blue : document.querySelector("#sldBlue").value
    }
    let tekstslidervalue = JSON.stringify(slidervalue);
    localStorage.setItem("slidervalue", tekstslidervalue);
};

const restoreSliderValues = () => {
    let tekstslider = localStorage.getItem("slidervalue");
    let slidervalue = JSON.parse(tekstslider);
    document.querySelector("#sldRed").value = slidervalue.red
    document.querySelector("#sldGreen").value = slidervalue.green
    document.querySelector("#sldBlue").value = slidervalue.blue
    document.querySelector("#lblRed").innerHTML=slidervalue.red;
    document.querySelector("#lblGreen").innerHTML=slidervalue.green;
    document.querySelector("#lblBlue").innerHTML=slidervalue.blue;
    let swatch=document.querySelector("#swatch");
    swatch.style.backgroundColor="rgb("+slidervalue.red+","+slidervalue.green+","+slidervalue.blue+")";
};

const storeSwatches = () => {
    let grotestorage = localStorage.length
    for (let i = 1; i < grotestorage ; i++) {
        localStorage.removeItem(i.toString())
    }
    let swatches = document.querySelectorAll(".swatch")
    for (let i = 1; i < swatches.length ; i++) {
        let rgb = swatches[i].style.backgroundColor.split(",");
        let swatchvalue = {
            red : rgb[0].substring(4,rgb[0].length),
            green : rgb[1].substring(1,rgb[1].length),
            blue : rgb[2].substring(1,rgb[2].length-1)
        }
        let tekstswatchvalue = JSON.stringify(swatchvalue);
        localStorage.setItem(i.toString(), tekstswatchvalue);
    }

};

const restoreSwatches = () => {
    for (let i = 1; i < localStorage.length; i++) {
        let tekstswatch = localStorage.getItem(i.toString());
        let swatchvalue = JSON.parse(tekstswatch);

        let red = swatchvalue.red
        let green = swatchvalue.green
        let blue = swatchvalue.blue
        let saveSwatch = document.createElement("div");
        saveSwatch.classList.add("swatch");
        let divStorage = document.querySelector("body > div:last-of-type");
        saveSwatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
        divStorage.appendChild(saveSwatch);
        let closebutton = document.createElement("button")
        let textbtn = document.createTextNode("X")
        closebutton.style.float="right"
        closebutton.appendChild(textbtn)
        closebutton.addEventListener("click", closeElement)
        saveSwatch.insertAdjacentElement("beforeend", closebutton)
        saveSwatch.addEventListener("click", uploadColor)
    }

};
