// create grid

let colorValue = "#ff0000";
let minSquares = 1;
let maxSquares = 64;
let noOfSquares = 16;
let totalSquares = noOfSquares*noOfSquares;

let sketchPad = document.querySelector(".sketchPad");
let btnChangeGridSize = document.querySelector(".btnChangeNoOfSquares");
let btnClearGrid = document.querySelector(".btnClear");
let gridColor = document.querySelector(".gridColor");

btnChangeGridSize.addEventListener("click", ()=>{
    squares = prompt("Please provide the grid size, between 1 and 100");
    if (squares === NaN){
        alert("Invalid input");
    } else if (squares >= minSquares && squares <= maxSquares){
        deleteGrid(noOfSquares);
        noOfSquares = squares;
        createGrid(noOfSquares);
    }
    console.log(squares)
})

btnClearGrid.addEventListener("click", ()=>{
    deleteGrid(noOfSquares);
    createGrid(noOfSquares);
})

createGrid(noOfSquares);
changeGridColor();

function changeGridColor(){
    
    gridColor.addEventListener("input",()=>{
        colorValue = gridColor.value;
    })
}
console.log(gridColor.value);
function deleteGrid(noOfSquares){
    for(let i = 0; i < noOfSquares * noOfSquares; i++){
        
        let div = document.querySelector(".newSquare");
        div.remove();
    }

}

function createGrid(noOfSquares){

    for(let i = 0; i < noOfSquares * noOfSquares; i++){
        let div = document.createElement("div");
        div.setAttribute("class", "newSquare");
        div.setAttribute("style", `width: ${500/noOfSquares}px; height: ${500/noOfSquares}px;`);
        
        console.log(colorValue)
        div.addEventListener("mouseenter", ()=>{
            div.style.backgroundColor =`${colorValue}`;
        })
        sketchPad.appendChild(div);
    }
}