const setup = () => {
    const an = "De man van An geeft geen hand aan ambetante verwanten"
    let count = 0;
    let index = 0;
    while (index !== -1) {
        index = an.indexOf("an", index + 1);
        count++;
    }

    console.log(count);
    count = 1;
    index = an.lastIndexOf("an");

    while (index !== -1) {
        count++;
        index = an.lastIndexOf("an", index - 1)

    }

    console.log(count); // output: 3
}
window.addEventListener("load", setup);