const initialize = () => {
	let sliders = document.querySelectorAll("input");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	let button = document.querySelector("button");
	button.addEventListener("click", save);
	update();
};

const update = () => {
	let red=document.querySelector("#sldRed").value; //input always value
	let green=document.querySelector("#sldGreen").value;
	let blue=document.querySelector("#sldBlue").value;
	document.querySelector("#lblRed").innerHTML=red;
	document.querySelector("#lblGreen").innerHTML=green;// html-element innerHTML
	document.querySelector("#lblBlue").innerHTML=blue;
	let swatch=document.querySelector("#swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};
const save = () => {
	let saveSwatch = document.createElement("div");
	saveSwatch.classList.add("swatch");
	let divStorage = document.querySelector("body > div:last-of-type");
	let red=document.querySelector("#sldRed").value;
	let green=document.querySelector("#sldGreen").value;
	let blue=document.querySelector("#sldBlue").value;
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
const uploadColor = (event) => {
	let target = event.target;
	let currentTarget =event.currentTarget
	if (target == currentTarget){
		let swatch = document.querySelector("#swatch");
		swatch.style.backgroundColor = target.style.backgroundColor;
		let rgb = target.style.backgroundColor.split(",");
		let red = rgb[0].substring(4,rgb[0].length);
		let green = rgb[1].substring(1,rgb[1].length);
		let blue = rgb[2].substring(1,rgb[2].length-1);
		document.querySelector("#sldRed").value=red; //input always value
		document.querySelector("#sldGreen").value=green;
		document.querySelector("#sldBlue").value=blue;
		document.querySelector("#lblRed").innerHTML=red;
		document.querySelector("#lblGreen").innerHTML=green;// html-element innerHTML
		document.querySelector("#lblBlue").innerHTML=blue;
	}
}
const closeElement = (event) => {
	let target = event.target;
	target.parentElement.remove();
}

window.addEventListener("load", initialize);