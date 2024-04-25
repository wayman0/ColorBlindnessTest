const row0D = document.getElementById("row0");
const row0B = row0D.getElementsByClassName("rowButton");
const r0Check = document.getElementById("r0Check");

const row1D = document.getElementById("row1");
const row1B = row1D.getElementsByClassName("rowButton");
const r1Check = document.getElementById("r1Check");

const row2D = document.getElementById("row2");
const row2B = row2D.getElementsByClassName("rowButton");
const row2Check = document.getElementById("r2Check");

const buttons = document.getElementsByClassName("rowButton");

const rgRowColors = new Array(row0B.length);
const gbRowColors = new Array(row1B.length);
const brRowColors = new Array(row2B.length);

for(let index = 0; index < rgRowColors.length; index += 1)
{
    rgRowColors[index] = getComputedStyle(row0B[index])['backgroundColor'];
    gbRowColors[index] = getComputedStyle(row1B[index])['backgroundColor'];
    brRowColors[index] = getComputedStyle(row2B[index])['backgroundColor'];
}

let dragged;
let buttonOver;

randomizeRows();

r0Check.addEventListener("click", checkRow0);
r1Check.addEventListener("click", checkRow1);
r2Check.addEventListener("click", checkRow2);


for(const button of buttons)
{
    button.addEventListener("dragstart", handleDragStart);
    button.addEventListener("dragover",  handleDragOver);
    button.addEventListener("dop",       handleDrop);
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

function handleDragStart(e)
{
    if(e.target.id.includes("25"))
        alert("Error, you can't drag that box");
    else
        dragged = e.target;
}

function handleDragOver(e)
{
    e.preventDefault();
    
    if(buttonOver != e.target)
    {
        buttonOver = e.target;
        dragged.parentNode.insertBefore(dragged, buttonOver);
    }
}

function handleDrop(e)
{
    e.preventDefault();
}

function checkRow0(e)
{
    let correct = true;
    for(let index = 0; index < row0B.length; index += 1)
    {
        const style = getComputedStyle(row0B[index])['backgroundColor'];

        if(style != rgRowColors[index])           
            correct = false;
    }

    alert(correct? "You Got This Row Right":"You Got This Row Wrong");
}

function checkRow1(e)
{
    let correct = true;
    for(let index = 0; index < row1B.length; index += 1)
    {
        const style = getComputedStyle(row1B[index])['backgroundColor'];
        if(style != gbRowColors[index])           
            correct = false;
    }

    alert(correct? "You Got This Row Right":"You Got This Row Wrong");
}

function checkRow2(e)
{
    let correct = true;
    for(let index = 0; index < row2B.length; index += 1)
    {
        const style = getComputedStyle(row2B[index])['backgroundColor'];
        if(style != brRowColors[index])           
            correct = false;
    }

    alert(correct? "You Got This Row Right":"You Got This Row Wrong");
}