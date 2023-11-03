// create grid

const sketchPad = document.querySelector(".sketchPad");
const inputColor = document.querySelector(".inputColor");
const btnColorMode = document.querySelector(".btnColorMode");
const inputGridSize = document.querySelector(".inputGridSize");
const btnClear = document.querySelector(".btnClear");
const btnRandomMode = document.querySelector(".btnRandomMode")
const btnEraser = document.querySelector(".btnEraser");

const gridSize = document.querySelector(".gridSize")

let selectedMode = "eraser";
let selectColor = "lightblue";

const squaresMin = 2;
const squaresMax = 64;
let noOfSquares = inputGridSize.getAttribute("value");

let eventMouseDown = false;


main()

function main(){
    createGrid(noOfSquares);
    
    modeSelect();
    buttonColorMode();
    buttonRandomMode();
    buttonEraser();
    buttonClear();
    gridSizeChanger();
}

// Grid Creation
function createGrid(noOfSquares){
    for(let i = 0; i < noOfSquares * noOfSquares; i++){
        let grid = document.createElement("div");
        grid.setAttribute("class", "newSquare");
        grid.setAttribute("style", `width: ${500/noOfSquares}px; height: ${500/noOfSquares}px;`);
        gridEvents(grid);
        
        sketchPad.appendChild(grid);
        colorInput();
    }
}

// Selected Mode
function modeSelect(){
    if(selectedMode == "color"){
        selectColor = inputColor.value;
        btnRandomMode.style.backgroundColor = "#ededed"
        btnColorMode.style.backgroundColor = "lightblue";
        btnEraser.style.backgroundColor = "#ededed";
    } else if(selectedMode == "Random"){
        selectColor = getRandomColor();
        btnRandomMode.style.backgroundColor = "lightblue"
        btnColorMode.style.backgroundColor = "#ededed";
        btnEraser.style.backgroundColor = "#ededed";
    } else if (selectedMode == "eraser"){
        selectColor = "white";
        btnRandomMode.style.backgroundColor = "#ededed"
        btnColorMode.style.backgroundColor = "#ededed";
        btnEraser.style.backgroundColor = "lightblue";
    }
}

// Color mode behaviour
function buttonColorMode(){
    
    btnColorMode.addEventListener("click", ()=>{    
        selectedMode = "color";
        console.log(selectedMode);
        modeSelect()
    })
}

// Random mode behaviour
function buttonRandomMode() {
    
    btnRandomMode.addEventListener("click", ()=>{
        selectedMode = "Random";
        console.log(selectedMode);
        modeSelect();
    })
}

// button eraser behavior
function buttonEraser() {

    btnEraser.addEventListener("click", ()=>{
        selectedMode = "eraser";
        console.log(selectedMode);
        modeSelect()
    });
}

// Clear button behavior
function buttonClear(){
    btnClear.addEventListener("click", ()=>{
        deleteGrid(noOfSquares);
        createGrid(noOfSquares);
    })
}

// input type range 
function gridSizeChanger() {

    inputGridSize.addEventListener("input", ()=>{
        gridSize.textContent = inputGridSize.value + " x " + inputGridSize.value;
    })
    
    inputGridSize.addEventListener("mouseup", (event)=>{
        deleteGrid(noOfSquares);
        noOfSquares = event.target.value
        createGrid(noOfSquares);
    })
}

function gridEvents(grid){
    sketchPad.onmousedown = () => (eventMouseDown = true)
    sketchPad.onmouseup = () => (eventMouseDown = false)

    grid.addEventListener("mouseenter", ()=>{
        if(eventMouseDown){
            grid.style.backgroundColor = `${selectColor}`;
        }  
    })
    
}

function deleteGrid(noOfSquares){
    for(let i = 0; i < noOfSquares * noOfSquares; i++){
        let div = document.querySelector(".newSquare");
        div.remove();
    }
}
function colorInput(){
    inputColor.addEventListener("input",()=>{
        modeSelect();
    
        console.log(inputColor.value)
    })    
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}