const row0S = document.getElementById("row0Show")
const row0D = document.getElementById("row0Butt");
const row0B = row0D.getElementsByClassName("rowButton");
const r0Check = document.getElementById("r0Check");
const r0Show = document.getElementById("r0Show");
const r0Hide = document.getElementById("r0Hide");

const row1S = document.getElementById("row1Show");
const row1D = document.getElementById("row1Butt");
const row1B = row1D.getElementsByClassName("rowButton");
const r1Check = document.getElementById("r1Check");
const r1Show = document.getElementById("r1Show");
const r1Hide = document.getElementById("r1Hide");

const row2S = document.getElementById("row2Show")
const row2D = document.getElementById("row2Butt");
const row2B = row2D.getElementsByClassName("rowButton");
const r2Check = document.getElementById("r2Check");
const r2Show = document.getElementById("r2Show");
const r2Hide = document.getElementById("r2Hide");

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

r0Show.addEventListener("click", showRow0);
r1Show.addEventListener("click", showRow1);
r2Show.addEventListener("click", showRow2);

r0Hide.addEventListener("click", hideRow0);
r1Hide.addEventListener("click", hideRow1);
r2Hide.addEventListener("click", hideRow2);

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
    let correct = 0;
    // skip the white invisible button
    for(let index = 0; index < row0B.length -1; index += 1)
    {
        const style = getComputedStyle(row0B[index])['backgroundColor'];

        if(style == rgRowColors[index])           
            correct += 1;
    }

    alert("You got " + correct + " out of " + (row0B.length-1) + " right.\nThat is a " + (correct/(row0B.length-1)) * 100 + "%");
}

function checkRow1(e)
{
    let correct = 0;
    for(let index = 0; index < row1B.length-1; index += 1)
    {
        const style = getComputedStyle(row1B[index])['backgroundColor'];
        if(style == gbRowColors[index])           
            correct += 1;
    }

    alert("You got " + correct + " out of " + (row1B.length-1) + " right.\nThat is a " + (correct/(row1B.length-1)) * 100 + "%");
}

function checkRow2(e)
{
    let correct = 0;
    for(let index = 0; index < row2B.length-1; index += 1)
    {
        const style = getComputedStyle(row2B[index])['backgroundColor'];
        if(style == brRowColors[index])           
            correct += 1;
    }

    alert("You got " + correct + " out of " + (row2B.length-1) + " right.\nThat is a " + (correct/(row2B.length-1)) * 100 + "%");
}

function showRow0(e)
{
    row0S.style.visibility = "visible";
}

function showRow1(e)
{
    row1S.style.visibility = "visible";
}

function showRow2(e)
{
    row2S.style.visibility = "visible";
}

function hideRow0(e)
{
    row0S.style.visibility = "hidden";
}

function hideRow1(e)
{
    row1S.style.visibility = "hidden";
}

function hideRow2(e)
{
    row2S.style.visibility = "hidden";
}