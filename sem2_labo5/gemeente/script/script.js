const setup = () => {
    let input = "";
    let gemeentes = [];
    while (!(input === "stop")) {
        input = prompt("geef een gemeente of stop met stop");
        if (!(input === "stop")) {
            gemeentes.push(input);
        }
    }
    gemeentes.sort();
    const selectElement = document.getElementById('gemeenten');


    gemeentes.forEach(gemeente => {
        const optionElement = document.createElement('option');
        optionElement.textContent = gemeente;
        selectElement.appendChild(optionElement);
    });
}
window.addEventListener("load", setup);