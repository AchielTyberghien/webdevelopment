const setup = () => {
    const zin = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    let het = zin.split(" de ").join(" het ")
    console.log(het)
}
window.addEventListener("load", setup);