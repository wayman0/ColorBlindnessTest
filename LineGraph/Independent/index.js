const row0S = document.getElementById("row0Show")
const row0D = document.getElementById("row0Butt");
const row0B = row0D.getElementsByClassName("rowButton");
const r0Check = document.getElementById("r0Check");
const r0Show = document.getElementById("r0Show");
const r0Results = document.getElementById("r0Results");

const row1S = document.getElementById("row1Show");
const row1D = document.getElementById("row1Butt");
const row1B = row1D.getElementsByClassName("rowButton");
const r1Check = document.getElementById("r1Check");
const r1Show = document.getElementById("r1Show");
const r1Results = document.getElementById("r1Results");

const row2S = document.getElementById("row2Show")
const row2D = document.getElementById("row2Butt");
const row2B = row2D.getElementsByClassName("rowButton");
const r2Check = document.getElementById("r2Check");
const r2Show = document.getElementById("r2Show");
const r2Results = document.getElementById("r2Results");

const buttons = document.getElementsByClassName("rowButton");

const rgRowColors = new Array(row0B.length);
const gbRowColors = new Array(row1B.length);
const brRowColors = new Array(row2B.length);

const totRGScore = new Array();
const totGBScore = new Array();
const totBRScore = new Array();

window.rgRowColors = rgRowColors;
window.gbRowColors = gbRowColors;
window.brRowColors = brRowColors;

window.totRGScore = totRGScore;
window.totGBScore = totGBScore;
window.totBRScore = totBRScore;


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

r0Show.addEventListener("click", () => {row0S.style.visibility == "visible" ? row0S.style.visibility = "hidden" : row0S.style.visibility = "visible";});
r1Show.addEventListener("click", () => {row1S.style.visibility == "visible" ? row1S.style.visibility = "hidden" : row1S.style.visibility = "visible";});
r2Show.addEventListener("click", () => {row2S.style.visibility == "visible" ? row2S.style.visibility = "hidden" : row2S.style.visibility = "visible";});

r0Results.addEventListener("click", seeResults);
r1Results.addEventListener("click", seeResults);
r2Results.addEventListener("click", seeResults);

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
        const range = row0B.length -2; 

        const rIndex1 = Math.trunc(Math.random() * (range)) + 1;
        const rIndex2 = Math.trunc(Math.random() * (range)) + 1;

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
        const range = row1B.length -2; 

        const rIndex1 = Math.trunc(Math.random() * (range)) + 1;
        const rIndex2 = Math.trunc(Math.random() * (range)) + 1;

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
        const range = row2B.length -2;
        const rIndex1 = Math.trunc(Math.random() * (range)) + 1;
        const rIndex2 = Math.trunc(Math.random() * (range)) + 1;

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

    if(dragged.id.charAt(1) == '0')
        for(const button of row0B)
            button.textContent = " ";
    else if(dragged.id.charAt(1) == '1')
        for(const button of row1B)
            button.textContent = " ";
    else if(dragged.id.charAt(1) == '2')
        for(const button of row2B)
            button.textContent = " ";

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
    totRGScore[totRGScore.length] = new Array(rgRowColors.length);

    for(let x = 0; x < row0B.length; x += 1)
    {
        const button = row0B[x];
        const color = getComputedStyle(button)['backgroundColor'];
        const loc = findLocation(color, rgRowColors);

        if(loc != x)
            button.textContent = "X";

        totRGScore[totRGScore.length-1][x] = Math.abs(loc - x);
    }
}

function checkRow1(e)
{
    totGBScore[totGBScore.length] = new Array(gbRowColors.length);

    for(let x = 0; x < row1B.length; x += 1)
    {
        const button = row1B[x];
        const color = getComputedStyle(button)['backgroundColor'];
        const loc = findLocation(color, gbRowColors);

        if(loc != x)
            button.textContent = "X";

        totGBScore[totGBScore.length-1][x] = Math.abs(loc - x);
    }
}

function checkRow2(e)
{
    totBRScore[totBRScore.length] = new Array(brRowColors.length);

    for(let x = 0; x < row2B.length; x += 1)
    {
        const button = row2B[x];
        const color = getComputedStyle(button)['backgroundColor'];
        const loc = findLocation(color, brRowColors);

        if(loc != x)
            button.textContent = "X";

        totBRScore[totBRScore.length-1][x] = Math.abs(loc - x);
    }
}

function findLocation(color, searchArr)
{
    for(let x = 0; x < searchArr.length; x += 1)
        if(searchArr[x] == color)
                return x;
}

function sum(arr)
{
    let s = 0;

    for(const e of arr)
        s += e;

    return s;
}

function seeResults(e)
{
    checkRow0();
    checkRow1();
    checkRow2();

    window.open(window.location.href + "results.html", "_blank");
}