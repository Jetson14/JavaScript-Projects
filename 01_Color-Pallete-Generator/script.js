const refreshBtn = document.querySelector('.refresh-btn');
const container = document.querySelector('.container');
const maxPaletteBoxes = 30;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container

    //generate hexcode
    for(let i=0; i<maxPaletteBoxes; i++){
        let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`

        //creating a new 'li' element and inserting it to tyhe container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span> `

        container.appendChild(color);

        color.addEventListener("click", () => {
            copyColor(color, randomHex)
        })
    }
}

generatePalette();

refreshBtn.addEventListener("click",generatePalette);

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerHTML = "Copied!";
        setTimeout(()=> colorElement.innerHTML = hexVal,1000);
    }).catch(()=> alert('Failed to copy color code'))
}



