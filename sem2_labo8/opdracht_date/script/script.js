const setup = () => {
    let verjaardag = new Date(2023, 4, 8, 0, 0, 0);
    let today = new Date();
    let vershil = new Date(verjaardag - today);
    let dagen = vershil.getDate();
    console.log(dagen);
}
window.addEventListener("load", setup);