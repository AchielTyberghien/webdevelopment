const setup = () => {
    let txtOutput = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < txtOutput.length; i++) {
        txtOutput[i].className = "opvallend belangrijk";
    }
}
window.addEventListener("load", setup);