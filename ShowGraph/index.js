const row0S = document.getElementById("row0Show")
const row0D = document.getElementById("row0Butt");
const row0B = row0D.getElementsByClassName("rowButton");
const r0Check = document.getElementById("r0Check");
const r0Show = document.getElementById("r0Show");
const r0Hide = document.getElementById("r0Hide");
const r0Results = document.getElementById("r0Results");

const row1S = document.getElementById("row1Show");
const row1D = document.getElementById("row1Butt");
const row1B = row1D.getElementsByClassName("rowButton");
const r1Check = document.getElementById("r1Check");
const r1Show = document.getElementById("r1Show");
const r1Hide = document.getElementById("r1Hide");
const r1Results = document.getElementById("r1Results");

const row2S = document.getElementById("row2Show")
const row2D = document.getElementById("row2Butt");
const row2B = row2D.getElementsByClassName("rowButton");
const r2Check = document.getElementById("r2Check");
const r2Show = document.getElementById("r2Show");
const r2Hide = document.getElementById("r2Hide");
const r2Results = document.getElementById("r2Results");

const buttons = document.getElementsByClassName("rowButton");

const rgRowColors = new Array(row0B.length);
const gbRowColors = new Array(row1B.length);
const brRowColors = new Array(row2B.length);

// export to allow them to be used in the results files
export const totRYScore = new Array();
export const totYGScore = new Array();
export const totGCScore = new Array();
export const totCBScore = new Array();
export const totBPScore = new Array();
export const totPRScore = new Array();

for(let index = 0; index < rgRowColors.length; index += 1)
{
    rgRowColors[index] = getComputedStyle(row0B[index])['backgroundColor'];
    gbRowColors[index] = getComputedStyle(row1B[index])['backgroundColor'];
    brRowColors[index] = getComputedStyle(row2B[index])['backgroundColor'];
}

let dragged;
let buttonOver;

//randomizeRows();

r0Check.addEventListener("click", checkRow0);
r1Check.addEventListener("click", checkRow1);
r2Check.addEventListener("click", checkRow2);

r0Show.addEventListener("click", () => {row0S.style.visibility = "visible";});
r1Show.addEventListener("click", () => {row1S.style.visibility = "visible";});
r2Show.addEventListener("click", () => {row2S.style.visibility = "visible";});

r0Hide.addEventListener("click", () => {row0S.style.visibility = "hidden";});
r1Hide.addEventListener("click", () => {row1S.style.visibility = "hidden";});
r2Hide.addEventListener("click", () => {row2S.style.visibility = "hidden";});

r0Results.addEventListener("click", () => {window.open(window.location.href + "results.html", "_blank")});
r1Results.addEventListener("click", () => {window.open(window.location.href + "results.html", "_blank")});
r2Results.addEventListener("click", () => {window.open(window.location.href + "results.html", "_blank")});


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
    let correct = 0;
    let ryScore = 0;
    let ygScore = 0;

    // skip the white invisible button
    for(let index = 0; index < row0B.length -1; index += 1)
    {
        const style = getComputedStyle(row0B[index])['backgroundColor'];
        if(style == rgRowColors[index])           
            correct += 1;
        else
        {
            row0B[index].textContent = "X";

            // style = "rgb(000, 000, 000);"
            let firstComma = style.indexOf(",");
            let lastComma = style.lastIndexOf(",");

            let rComp = style.substring(4, firstComma);
            let gComp = style.substring(firstComma + 2, lastComma);

            if(rComp > gComp) // red to yellow half
                ryScore += calcDistance(row0B[index], index, rgRowColors);
            else // yellow to green half
                ygScore += calcDistance(row0B[index], index, rgRowColors);
        }
    }

    totRYScore.push(ryScore);
    totYGScore.push(ygScore);

    alert("Your red yellow score is: " + ryScore + "\nYour yellow green score is: " + ygScore);
}

function checkRow1(e)
{
    let correct = 0;
    let gcScore = 0; 
    let cbScore = 0;

    // skip the white invisible button
    for(let index = 0; index < row0B.length -1; index += 1)
    {
        const style = getComputedStyle(row1B[index])['backgroundColor'];
        if(style == gbRowColors[index])           
            correct += 1;
        else
        {
            row1B[index].textContent = "X";

            // style = "rgb(000, 000, 000);"
            let firstComma = style.indexOf(",");
            let lastComma = style.lastIndexOf(",");
            let lastPar = style.lastIndexOf(")");

            let gComp = style.substring(firstComma + 2, lastComma);
            let bComp = style.substring(lastComma + 2, lastPar);

            if(gComp > bComp) // green to cyan half
                gcScore += calcDistance(row1B[index], index, gbRowColors);
            else // cyan to blue half
                cbScore += calcDistance(row1B[index], index, gbRowColors);
        }
    }

    totGCScore.push(gcScore);
    totCBScore.push(cbScore);

    alert("Your green cyan score is: " + gcScore + "\nYour cyan blue score is: " + cbScore);
}

function checkRow2(e)
{
    let correct = 0;
    let bpScore = 0; 
    let prScore = 0;

    // skip the white invisible button
    for(let index = 0; index < row0B.length -1; index += 1)
    {
        const style = getComputedStyle(row2B[index])['backgroundColor'];
        if(style == brRowColors[index])           
            correct += 1;
        else
        {
            row2B[index].textContent = "X";

            // style = "rgb(000, 000, 000);"
            let firstComma = style.indexOf(",");
            let lastComma = style.lastIndexOf(",");
            let lastPar = style.lastIndexOf(")");

            let bComp = style.substring(lastComma + 2, lastPar);
            let rComp = style.substring(4, firstComma);

            if(bComp > rComp) // blue to purple half
                bpScore += calcDistance(row2B[index], index, brRowColors);
            else // purple to red half
                prScore += calcDistance(row2B[index], index, brRowColors);
        }
    }

    totBPScore.push(bpScore);
    totPRScore.push(prScore);

    alert("Your blue purple score is: " + bpScore + "\nYour purple red score is: " + prScore);
}

/**
 * 
 * @param {Element} button the button to check 
 * @param {number} bIndex where in the unordered list the button is
 * @param {Array} row the list of ordered colors
 * @returns {number} the distance
 */
function calcDistance(button, bIndex, row)
{
    const buttColor = getComputedStyle(button)['backgroundColor'];
    let distance = 0; 

    // loop over the correct arranged buttons
    for(let index = 0; index < row.length; index += 1)
    {
        // get the color from the proper order row
        const color = row[index]

        if(buttColor == color) // if we find the same color
            distance = Math.abs(bIndex - index); // calculate the distance
    }

    return distance;
}
