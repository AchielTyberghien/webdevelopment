const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}
const substring = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks");
    let txtRechts=document.getElementById("txtRechts");
    let txtWoord=document.getElementById("txtWoord");
    let g1=parseInt(txtLinks.value, 10);
    let g2=parseInt(txtRechts.value, 10);
    let woord = txtWoord.value;
    let resultaat = woord.substring(g1,g2);
    txtOutput.innerHTML=resultaat;
}
window.addEventListener("load", setup);