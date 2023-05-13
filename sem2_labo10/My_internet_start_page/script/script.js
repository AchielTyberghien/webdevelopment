let cardsave = [];
const setup = () => {
    let button = document.querySelector("#searchbutton")
    button.addEventListener("click", card)
    restorecards()
}
const card = () => {
    let cardfield = document.querySelector(".cardfield")
    let inputfield = document.querySelector("#zoekbalk")
    let card = document.createElement("div")
    let heading = document.createElement("h3")
    let pcard = document.createElement("p")
    let input = inputfield.value
    let prefix = input.split(" ",1)
    let zoekopdracht = input.substring(3,input.length)
    zoekopdracht.trim()
    if(input.substring(0,1) !== "/"){
        window.alert("Invalid command");
    }
    else{
        if(prefix[0] === "/g"){
            window.open("https://www.google.com/search?q=" + zoekopdracht.replace(" ","+"))
            let headingnode = document.createTextNode("Google")
            let pnode= document.createTextNode(zoekopdracht)
            heading.appendChild(headingnode)
            card.appendChild(heading)
            pcard.appendChild(pnode)
            card.appendChild(pcard)
            card.style.backgroundColor="rgb(66,133,244)"
            let cardfile = {
                title: "Google",
                text: zoekopdracht,
                url: "https://www.google.com/search?q=" + zoekopdracht.replace(" ", "+")
            }
            cardmaker(card,cardfield)
            cardsave.push(cardfile)
        }else if(prefix[0] === "/y"){
            window.open("https://www.youtube.com/results?search_query=" + zoekopdracht.replace(" ","+"))
            let headingnode = document.createTextNode("Youtube")
            let pnode= document.createTextNode(zoekopdracht)
            heading.appendChild(headingnode)
            card.appendChild(heading)
            pcard.appendChild(pnode)
            card.appendChild(pcard)
            card.style.backgroundColor="rgb(255,0,0)"
            let cardfile = {
                title: "Youtube",
                text: zoekopdracht,
                url: "https://www.youtube.com/results?search_query=" + zoekopdracht.replace(" ","+")
            }
            cardmaker(card,cardfield)
            cardsave.push(cardfile)
        }else if(prefix[0] === "/t"){
            window.open("https://twitter.com/hashtag/" + zoekopdracht.replace(" ","_"))
            let headingnode = document.createTextNode("Twitter")
            let pnode= document.createTextNode(zoekopdracht)
            heading.appendChild(headingnode)
            card.appendChild(heading)
            pcard.appendChild(pnode)
            card.appendChild(pcard)
            card.style.backgroundColor="rgb(24,119,242)"
            let cardfile  = {
                title: "Twitter",
                text: zoekopdracht,
                url: "https://twitter.com/hashtag/" + zoekopdracht.replace(" ","_")
            }
            cardmaker(card,cardfield);
            cardsave.push(cardfile)
        }else if(prefix[0] === "/i"){
            window.open("https://www.instagram.com/explore/tags/" + zoekopdracht.replace(" ","_"))
            let headingnode = document.createTextNode("Instagram")
            let pnode= document.createTextNode(zoekopdracht)
            heading.appendChild(headingnode)
            card.appendChild(heading)
            pcard.appendChild(pnode)
            card.appendChild(pcard)
            card.style.backgroundColor="rgb(195,42,163)"
            let cardfile = {
                title: "Instagram",
                text: zoekopdracht,
                url: "https://www.instagram.com/explore/tags/" + zoekopdracht.replace(" ","_")
            }
            cardmaker(card,cardfield)
            cardsave.push(cardfile)
        }else{
            window.alert("Unknown command prefix");
        }
    }
    inputfield.value = '';
    savecards();
}
const cardmaker = (card, cardfield) => {
    let button = document.createElement("button")
    let buttonnode = document.createTextNode("GO!")
    button.appendChild(buttonnode)
    button.setAttribute("id", "gobutton")
    button.setAttribute("type", "button")
    button.addEventListener("click", review)
    button.classList="buttoncard"
    card.appendChild(button)
    card.classList="kolom"
    let div = document.createElement("div")
    div.appendChild(card)
    div.classList="col-4"
    cardfield.appendChild(div)
}
const review = (event) => {
    let target = event.target
    let card = target.parentNode
    let title = card.firstElementChild.innerHTML
    let zoekopdrachtElement = card.children[1]
    let zoekopdracht = zoekopdrachtElement.innerHTML
    if(title === "Google"){
        window.open("https://www.google.com/search?q=" + zoekopdracht.replace(" ","+"))
    }else if(title === "Youtube"){
        window.open("https://www.youtube.com/results?search_query=" + zoekopdracht.replace(" ","+"))
    }else if(title === "Twitter"){
        window.open("https://twitter.com/hashtag/" + zoekopdracht.replace(" ","_"))
    }else if(title === "Instagram"){
        window.open("https://www.instagram.com/explore/tags/" + zoekopdracht.replace(" ","_"))
    }
}
const savecards = () => {
    let tekstcardsave = JSON.stringify(cardsave);
    localStorage.setItem("cardsave", tekstcardsave);
}
const restorecards = () => {
    let tekstcardsave = localStorage.getItem("cardsave");
    cardsave = JSON.parse(tekstcardsave);
    for (const cardfile of cardsave) {
        let cardfield = document.querySelector(".cardfield")
        let card = document.createElement("div")
        let heading = document.createElement("h3")
        let pcard = document.createElement("p")
        let headingnode = document.createTextNode(cardfile.title)
        let pnode= document.createTextNode(cardfile.text)
        heading.appendChild(headingnode)
        card.appendChild(heading)
        pcard.appendChild(pnode)
        card.appendChild(pcard)
        if(cardfile.title === "Google"){
            card.style.backgroundColor="rgb(66,133,244)"
        }else if(cardfile.title === "Youtube"){
            card.style.backgroundColor="rgb(255,0,0)"
        }else if(cardfile.title === "Twitter"){
            card.style.backgroundColor="rgb(24,119,242)"
        }else if(cardfile.title === "Instagram"){
            card.style.backgroundColor="rgb(195,42,163)"
        }
        cardmaker(card,cardfield)
    }
}
window.addEventListener("load", setup);