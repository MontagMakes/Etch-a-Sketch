// create grid

let selectColor = "black";
const squaresMin = 1;
const squaresMax = 64;
let noOfSquares = 16;
let totalSquares = noOfSquares*noOfSquares;

let eventMouseDown = false;

let sketchPad = document.querySelector(".sketchPad");
let btnChangeGridSize = document.querySelector(".btnChangeNoOfSquares");
let btnClear = document.querySelector(".btnClear");
let gridColor = document.querySelector(".gridColor");

console.log(gridColor.value)
gridColor.addEventListener("input", ()=>{
    selectColor = gridColor.value;
    gridColor.style.backgroundColor = gridColor.value;
})

sketchPad.onmousedown = () => (eventMouseDown = true)
sketchPad.onmouseup = () => (eventMouseDown = false)

createGrid(noOfSquares);

// Grid Creation
function createGrid(noOfSquares){
    for(let i = 0; i < noOfSquares * noOfSquares; i++){
        let grid = document.createElement("div");
        grid.setAttribute("class", "newSquare");
        grid.setAttribute("style", `width: ${500/noOfSquares}px; height: ${500/noOfSquares}px;`);
        gridEvents(grid);
        
        sketchPad.appendChild(grid);       
    }
}

// Grid Events
function gridEvents(grid){
    grid.addEventListener("mouseenter", ()=>{
        if(eventMouseDown){
            grid.style.backgroundColor = `${selectColor}`;
        }  
    })
}

btnChangeGridSize.addEventListener("click", ()=>{
    squares = prompt("Please provide the grid size, between 1 and 100");
    if (squares === NaN){
        alert("Invalid input");
    } else if (squares >= squaresMin && squares <= squaresMax){
        deleteGrid(noOfSquares);
        noOfSquares = squares;
        createGrid(noOfSquares);
    }
    console.log(squares)
})

btnClear.addEventListener("click", ()=>{
    deleteGrid(noOfSquares);
    createGrid(noOfSquares);
})

function deleteGrid(noOfSquares){
    for(let i = 0; i < noOfSquares * noOfSquares; i++){
        let div = document.querySelector(".newSquare");
        div.remove();
    }
}

