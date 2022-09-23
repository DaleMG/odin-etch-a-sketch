const resetBtn = document.querySelector('.resets')
const gridSizeBtn = document.querySelector('.gridSize')
const rainbowBtn = document.querySelector('.rainbow')
const blackBtn = document.querySelector('.black')
let truck = false;

document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
})

function createGrid(gSize) {
    let containerGrid = document.querySelector('.containerGrid')
    let numDivs = gSize * gSize
    
    containerGrid.style.gridTemplateColumns = `repeat(${gSize},1fr)`
    containerGrid.style.gridTemplateRows = `repeat(${gSize},1fr)`

    for (let i = 0;i < numDivs;i++) {
        let div = document.createElement('div')
        div.addEventListener("mouseover", function(){
            if (truck == true) {
                div.style.backgroundColor = rainbowColor()
            } else {
                div.style.backgroundColor = "black"
            }
        })
        containerGrid.insertAdjacentElement("beforeend", div)
    }
}

function getSize() {
    let input = prompt("Enter a grid size   (Max size is 100)")
    while((input <=0) || (input > 100)) {
        input = prompt("Enter a grid size   (Max size is 100)")
    }
    return createGrid(input)
}

function rainbowColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
}

function resetGrid() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}

resetBtn.addEventListener('click', () => {
    resetGrid()
    createGrid(16)
})
gridSizeBtn.addEventListener('click', () => {
   getSize();
})
rainbowBtn.addEventListener('click', () => {
    truck = true;
 })
blackBtn.addEventListener('click', () => {
    truck = false;
 })


