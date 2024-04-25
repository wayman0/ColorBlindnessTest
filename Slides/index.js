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

const rgRowColors = new Array(2);
rgRowColors[0] = new Array(row0B.length);
rgRowColors[1] = new Array(row0B.length);

const gbRowColors = new Array(2);
gbRowColors[0] = new Array(row1B.length);
gbRowColors[1] = new Array(row1B.length);

const brRowColors = new Array(2);
brRowColors[0] = new Array(row2B.length);
brRowColors[1] = new Array(row2B.length);

for(let index = 0; index < rgRowColors[0].length; index += 1)
{
    rgRowColors[0][index] = 255 - (10 * index);
    rgRowColors[1][index] =   0 + (10 * index);

    gbRowColors[0][index] = 255 - (10 * index);
    gbRowColors[1][index] =   0 + (10 * index);

    brRowColors[0][index] = 255 - (10 * index);
    brRowColors[1][index] =   0 + (10 * index);
}

rgRowColors[0][rgRowColors[0].length-1] = 255;
rgRowColors[1][rgRowColors[1].length-1] = 255;

gbRowColors[0][rgRowColors[0].length-1] = 255;
gbRowColors[1][rgRowColors[1].length-1] = 255;

brRowColors[0][rgRowColors[0].length-1] = 255;
brRowColors[1][rgRowColors[1].length-1] = 255;

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
        
        const startP = style.indexOf('(');
        const endP = style.indexOf(')');
        
        const rgbStr = style.substring(startP+1, endP);
        const rgbArr = rgbStr.split(", ");
        
        const rStr = rgbArr[0];
        const gStr = rgbArr[1];

        if(! (rStr == rgRowColors[0][index] &&
              gStr == rgRowColors[1][index]))
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
        
        const startP = style.indexOf('(');
        const endP = style.indexOf(')');
        
        const rgbStr = style.substring(startP+1, endP);
        const rgbArr = rgbStr.split(", ");
        
        const gStr = rgbArr[1];
        const bStr = rgbArr[2];

        if(! (gStr == gbRowColors[0][index] &&
              bStr == gbRowColors[1][index]))
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
        
        const startP = style.indexOf('(');
        const endP = style.indexOf(')');
        
        const rgbStr = style.substring(startP+1, endP);
        const rgbArr = rgbStr.split(", ");
        
        const bStr = rgbArr[2];
        const rStr = rgbArr[0];

        if(! (bStr == brRowColors[0][index] &&
              rStr == brRowColors[1][index]))
                correct = false;
    }

    alert(correct? "You Got This Row Right":"You Got This Row Wrong");
}