var family = ["steven","dirk","geert","andries","vincent"];
const setup = () => {
    console.log(family.length);
    console.log(family[0]);
    console.log(family[2]);
    console.log(family[4]);
    VoegNaamToe();
    console.log(family)
    console.log(family.join())
}
const VoegNaamToe = () => {
    let persoon = prompt("Heef een naam van een familielid in.", "hans")
    family.push(persoon)
}
window.addEventListener("load", setup);