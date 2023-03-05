const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	colorDemos[0].style.backgroundColor = 'rgb(' + 50 + ',' + 50 + ',' + 50 + ')';

	let rednum = document.getElementsByClassName("rednum")
	rednum[0].innerHTML = '50'
	let greennum = document.getElementsByClassName("greennum")
	greennum[0].innerHTML = '20'
	let bluenum = document.getElementsByClassName("bluenum")
	bluenum[0].innerHTML = '50'
}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let value = [0,0,0]
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		value[i] = sliders[i].value;
		console.log("de waarde van de slider is momenteel : "+value);
	}
	let rgb = 'rgb(' + value[0] + ',' + value[1] + ',' + value[2] + ')';
	colorDemos[0].style.backgroundColor = rgb;

	let rednum = document.getElementsByClassName("rednum")
	rednum[0].innerHTML = value[0]
	let greennum = document.getElementsByClassName("greennum")
	greennum[0].innerHTML = value[1]
	let bluenum = document.getElementsByClassName("bluenum")
	bluenum[0].innerHTML = value[2]
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);