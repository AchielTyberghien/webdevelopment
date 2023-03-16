const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboorte();
	valideerMail();
	valideerKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};
const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let familienaam = txtFamilienaam.value.trim();
	if (familienaam.length > 50) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML += "max. 50 karakters";
	} else {
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilienaam.innerHTML = "";
	}
	if (familienaam.length === 0) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML += "verplicht veld";
	} else {
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilienaam.innerHTML = "";
	}
};
const valideerGeboorte = () => {
	let txtGeboorte = document.getElementById("txtGeboorte");
	let errGeboorte = document.getElementById("errGeboorte");
	let geboorte = txtGeboorte.value.trim();
	let format = /^\d{4}-\d{2}-\d{2}$/;
	if (geboorte.length === 0) {
		txtGeboorte.className="invalid"; // invalid class instellen
		errGeboorte.innerHTML = "verplicht veld";
	}
	else if(!format.test(geboorte)){
		txtGeboorte.className="invalid"; // invalid class instellen
		errGeboorte.innerHTML = "formaat is niet jjjj-mm-dd";
	}else {
		txtGeboorte.className=""; // alle classes verwijderen
		errGeboorte.innerHTML = "";
	}

};
const valideerMail = () => {
	let txtMail = document.getElementById("txtMail");
	let errMail = document.getElementById("errMail");
	let mail = txtMail.value.trim();
	let format = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
	if (mail.length === 0) {
		txtMail.className="invalid"; // invalid class instellen
		errMail.innerHTML = "verplicht veld";
	} else if(format.test(mail)){
		txtMail.className="invalid"; // invalid class instellen
		errMail.innerHTML = "geen geldig email adres";
	} else {
		txtMail.className=""; // alle classes verwijderen
		errMail.innerHTML = "";
	}
};
const valideerKinderen = () => {
	let txtKinderen = document.getElementById("txtKinderen");
	let errKinderen = document.getElementById("errKinderen");
	let kinderen = txtKinderen.value.trim();
	let format = /^[0-9]{1,2}$/
	if(!format.test(kinderen) || kinderen.substring(0,1) === "-"){
		txtKinderen.className="invalid"; // invalid class instellen
		errKinderen.innerHTML = "is geen positief getal";
	} else if (kinderen.length > 2) {
		txtKinderen.className="invalid"; // invalid class instellen
		errKinderen.innerHTML = "is te vruchtbaar";
	} else {
		txtKinderen.className=""; // alle classes verwijderen
		errKinderen.innerHTML = "";
	}
};



window.addEventListener("load", setup);