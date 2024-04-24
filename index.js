const row0D = document.getElementById("row0");
const row0B = row0D.getElementsByClassName("rowButton");

const row1D = document.getElementById("row1");
const row1B = row1D.getElementsByClassName("rowButton");

const row2D = document.getElementById("row2");
const row2B = row2D.getElementsByClassName("rowButton");

const buttons = document.getElementsByClassName("rowButton");

let startButton, endButton;
let tempColor;

for(const button of buttons)
{
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup",   handleMouseUp);
}

//for(const element of row0B)
//    element.addEventListener("click", handleClick);
//
//for(const element of row1B)
//    element.addEventListener("click", handleClick);
//
//for(const element of row2B)
//    element.addEventListener("click", handleClick);

function handleMouseDown(e)
{
    const buttonID = e.target.id;
    let row = 0;
    let clickedID;

    for(const button of row0B)
        if(button.id == buttonID)
            handleRow0Down(e, button);
        
    for(const button of row1B)
        if(button.id == buttonID)
            handleRow1Down(e, button);
    
    for(const button of row2B)
        if(button.id == buttonID)
            handleRow2Down(e, button);
}

function handleMouseUp(e)
{
    const buttonID = e.target.id;
    let row = 0;
    let clickedID;

    for(const button of row0B)
        if(button.id == buttonID)
            handleRow0Up(e, button);
        
    for(const button of row1B)
        if(button.id == buttonID)
            handleRow1Up(e, button);
    
    for(const button of row2B)
        if(button.id == buttonID)
            handleRow2Up(e, button);
}

function handleClick(e)
{
    const buttonID = e.target.id;
    let row = 0;
    let clickedID;

    for(const button of row0B)
        if(button.id == buttonID)
            handleRow0(e, button);
        
    for(const button of row1B)
        if(button.id == buttonID)
            handleRow1(e, button);
    
    for(const button of row2B)
        if(button.id == buttonID)
            handleRow2(e, button);
    
}

function handleRow0Down(e, button)
{
    startButton = button;
    tempColor = getComputedStyle(button)['backgroundColor'];
}

function handleRow1Down(e, button)
{
    startButton = button;
    tempColor = getComputedStyle(button)['backgroundColor'];
}

function handleRow2Down(e, button)
{
    startButton = button;
    tempColor = getComputedStyle(button)['backgroundColor'];
}

function handleRow0Up(e, button)
{
    endButton = button;
    startButton.style.backgroundColor = getComputedStyle(endButton)['backgroundColor'];
    endButton.style.backgroundColor = tempColor;

    endButton = undefined;
    startButton = undefined;
     tempColor = undefined;
}

function handleRow1Up(e, button)
{
    endButton = button;
    startButton.style.backgroundColor = getComputedStyle(endButton)['backgroundColor'];
    endButton.style.backgroundColor = tempColor;
    endButton = undefined;
    startButton = undefined;
     tempColor = undefined;
}

function handleRow2Up(e, button)
{
    endButton = button;
    startButton.style.backgroundColor = getComputedStyle(endButton)['backgroundColor'];
    endButton.style.backgroundColor = tempColor;
    endButton = undefined;
    startButton = undefined;
     tempColor = undefined;
}