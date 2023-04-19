let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    let error = document.querySelectorAll(".invalid")
    if(error.length === 0){
        let persoon = {
            voornaam: document.querySelector("#txtVoornaam").value,
            familienaam: document.querySelector("#txtFamilienaam").value,
            geboorteDatum: document.querySelector("#txtGeboorteDatum").value,
            email: document.querySelector("#txtEmail").value,
            Aantalkinderen: document.querySelector("#txtAantalKinderen").value
        }
        let nieuw = false;
        for (let i = 0; i < personen.length; i++) {
            if(personen[i].voornaam === persoon.voornaam && personen[i].familienaam === persoon.familienaam){
               nieuw = true;
               personen[i] = persoon
            }
        }
        if(nieuw === false){
            personen.push(persoon)
        }
    }
    let optionElementen = document.querySelectorAll("option")
    for (let optionElement of optionElementen) {
        optionElement.remove();
    }
    let select = document.querySelector("select")
    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option")
        option.id = i.toString();
        let text = document.createTextNode(personen[i].voornaam +" "+ personen[i].familienaam)
        option.appendChild(text)
        select.appendChild(option)
    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let inputvelden = document.querySelectorAll("input")
    for (const inputveldenElement of inputvelden) {
        if(inputveldenElement.type === "text"){
            inputveldenElement.value = ""
        }
    }

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};
const change = (event) => {
    let target = event.target;
    let index = target.id;
    Number(index);
    let persoon = personen[index];
    document.querySelector("#txtVoornaam").value = persoon.voornaam;
    document.querySelector("#txtFamilienaam").value = persoon.familienaam;
    document.querySelector("#txtGeboorteDatum").value = persoon.geboorteDatum;
    document.querySelector("#txtEmail").value = persoon.email;
    document.querySelector("#txtAantalKinderen").value = persoon.Aantalkinderen;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", change);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);