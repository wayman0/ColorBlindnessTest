const row0D = document.getElementById("row0");
const row0B = row0D.getElementsByClassName("rowButton");

const row1D = document.getElementById("row1");
const row1B = row1D.getElementsByClassName("rowButton");

const row2D = document.getElementById("row2");
const row2B = row2D.getElementsByClassName("rowButton");

const buttons = document.getElementsByClassName("rowButton");

let startButton, endButton;
let tempColor;

randomizeRows();

for(const button of buttons)
{
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup",   handleMouseUp);
}

function randomizeRows()
{
    randomizeRow0();
    randomizeRow1();
    randomizeRow2();
}

function randomizeRow0()
{
    for(let swap = 0; swap < row0B.length; swap += 1)
    {
        const rIndex1 = Math.trunc(Math.random() * (row0B.length-1));
        const rIndex2 = Math.trunc(Math.random() * (row0B.length-1));

        const b1 = row0B[rIndex1];
        const b2 = row0B[rIndex2];

        const tempColor = getComputedStyle(b1)['backgroundColor'];
        b1.style.backgroundColor = getComputedStyle(b2)['backgroundColor']
        b2.style.backgroundColor = tempColor;
    }
}

function randomizeRow1()
{
    for(let swap = 0; swap < row1B.length; swap += 1)
    {
        const rIndex1 = Math.trunc(Math.random() * (row1B.length-1));
        const rIndex2 = Math.trunc(Math.random() * (row1B.length-1));

        const b1 = row1B[rIndex1];
        const b2 = row1B[rIndex2];
        
        const tempColor = getComputedStyle(b1)['backgroundColor'];
        b1.style.backgroundColor = getComputedStyle(b2)['backgroundColor']
        b2.style.backgroundColor = tempColor;
    }
}

function randomizeRow2()
{
    for(let swap = 0; swap < row2B.length; swap += 1)
    {
        const rIndex1 = Math.trunc(Math.random() * (row2B.length-1));
        const rIndex2 = Math.trunc(Math.random() * (row2B.length-1));

        const b1 = row2B[rIndex1];
        const b2 = row2B[rIndex2];

        const tempColor = getComputedStyle(b1)['backgroundColor'];
        b1.style.backgroundColor = getComputedStyle(b2)['backgroundColor']
        b2.style.backgroundColor = tempColor;
    }
}

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