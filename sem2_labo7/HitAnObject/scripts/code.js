let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let img = document.querySelector("img");
    img.addEventListener("click",game);
    let button = document.querySelector("button")
    button.addEventListener("click",start);
};
const start = () => {
    changeImg();
    global.score = 0;
}
const game = (event) => {
    clearInterval(global.timeoutId)
    let target = event.target
    if(target.getAttribute("src") !== global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX){
        changeImg()

        global.score++;
        updateScore(global.score);
    }
    else{
        window.alert("game over score is: " + global.score);
        updateScore(0);
    }
}
const changeImg = () => {
    let img = document.querySelector("img");
    img.setAttribute("src","" + global.IMAGE_PATH_PREFIX + Math.floor(Math.random()*global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX);
    let left= 24 +Math.floor(Math.random()*752);
    let top=24 + Math.floor(Math.random()*552);
    img.style.left=left+"px";
    img.style.top=top+"px";
    global.timeoutId = setTimeout(changeImg, global.MOVE_DELAY);

}
const updateScore = (score) => {
    let span = document.querySelector("span")
    let text = document.createTextNode("Aantal hits: " + score);
    let oldtext = span.childNodes[0];
    span.replaceChild(text,oldtext);
}







window.addEventListener("load", setup);


