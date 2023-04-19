const setup = () => {
    let student1 = {
        voornaam : "Hans",
        familienaam : "Dirk",
        geboorteDatum :new Date(2013,2,18),
        geboorteplaats : "Tielt",
        adres : { // een object,
            straat : "veldstraat",
            nummer : "2",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        aantalAutos : 1
    }
    console.log(JSON.stringify(student1))
    let student = JSON.parse('{"voornaam":"Hans","familienaam":"Dirk","geboorteDatum":"2013-03-17T23:00:00.000Z","geboorteplaats":"Tielt","adres":{"straat":"veldstraat","nummer":"2","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"aantalAutos":1}');
    console.log(student);
    if(student1.voornaam === student.voornaam && student1.familienaam === student.familienaam && student1.geboorteDatum.toISOString() === student.geboorteDatum && student1.geboorteplaats === student.geboorteplaats && student1.adres.gemeente === student.adres.gemeente && student1.adres.nummer === student.adres.nummer && student1.adres.postcode === student.adres.postcode && student1.adres.straat === student.adres.straat && student1.isIngeschreven === student.isIngeschreven && student1.aantalAutos === student.aantalAutos){
        console.log("zelfde")
    }else{
        console.log("niet zelfde")
    }
}
window.addEventListener("load", setup);