const resetBtn = document.querySelector('.resets')
const gridSizeBtn = document.querySelector('.gridSize')
const rainbowBtn = document.querySelector('.rainbow')

document.addEventListener("DOMContentLoaded", function(){
    createGrid(32);
})

function createGrid(gSize) {
    let containerGrid = document.querySelector('.containerGrid')
    let numDivs = gSize * gSize
    
    containerGrid.style.gridTemplateColumns = `repeat(${gSize},1fr)`
    containerGrid.style.gridTemplateRows = `repeat(${gSize},1fr)`

    for (let i = 0;i < numDivs;i++) {
        let div = document.createElement('div')
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

resetBtn.addEventListener('click', () => {
    prompt('hi')
})
gridSizeBtn.addEventListener('click', () => {
   getSize();
})
rainbowBtn.addEventListener('click', () => {
    prompt('hi')
})


