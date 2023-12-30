let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    
    createBoard(16);

    let btn_popup = document.querySelector("#popup")
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
         let div = document.createElement("div");
         div.addEventListener("mouseover", colorDiv)
         board.insertAdjacentElement("beforeend", div);
    
    }

}

function getSize(){
    let input = prompt("Choose the size of the Board?");
    let message = document.querySelector("#message")

    if(input == ""){
        message.innerHTML = "Please provide a number";
    } else if(input < 0 || input > 100){
        message.innerHTML = "Please provide a number between 1 and 100";
    } else {
        message.innerHTML = "Now you can draw";
        return input;
    }

}

function colorDiv(){

    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if(color == "red"){
        this.style.backgroundColor = 'red'
    } else if(color == "blue"){
        this.style.backgroundColor = 'blue'
    } else if(color == "green"){
        this.style.backgroundColor = 'green'
    } else if(color == "delete"){
        this.style.backgroundColor = 'white'
    } else {
        this.style.backgroundColor = 'black'
    }

}

function setColor(colorChoice){

    color = colorChoice;

}

function resetBoard(){

    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}