const r0 = document.getElementById("row0");
const r1 = document.getElementById("row1");
const r2 = document.getElementById("row2");
const all = document.getElementById("all");

const totRGScore = window.opener.totRGScore;
const totGBScore = window.opener.totGBScore;
const totBRScore = window.opener.totBRScore;

const rgRowColors = window.opener.rgRowColors;
const gbRowColors = window.opener.gbRowColors;
const brRowColors = window.opener.brRowColors;

for(let numAttempts = 0; numAttempts < totRGScore.length; numAttempts += 1)
{
    const canvCont = document.createElement("div");
    canvCont.id = "r0a" + numAttempts + "D";
    canvCont.className = "graphDiv";

    const canv = document.createElement("canvas");
    canv.id = "r0a" + numAttempts;
    canv.className = "graph";

    r0.appendChild(canvCont);
    canvCont.appendChild(canv);

    const ctx = canv.getContext("2d");
    const lineGrad = ctx.createLinearGradient(0, 0, canv.width, 0);
    
    const leftOffSet  = 0.2; // how far from the left side the lines start in percents
    const rightOffSet = 0.0; // how far from the right side the lines stop in percents
    const leftEdge  = 0 + leftOffSet;   
    const rightEdge = 1 - rightOffSet;
    const lineRange = (rightEdge - leftEdge); // Calculate how much range the lines take up
    const stepSize = lineRange/rgRowColors.length; // split the range into n colors steps 

    for(let colIndex = 0; colIndex < rgRowColors.length; colIndex += 1)
        lineGrad.addColorStop(colIndex * stepSize + leftEdge, rgRowColors[colIndex]);


    // start 2/8 into the canvas because the gradient is based off of x coordinate
    // and the lines start roughly 2/8 into the canvas  
    //lineGrad.addColorStop(2/8, "rgb(250, 020, 000)");
    //lineGrad.addColorStop(5/8, "rgb(250, 250, 000");
    //lineGrad.addColorStop(8/8, "rgb(020, 250, 000)");
    
    const myChart = new Chart(ctx, 
    {
        type: 'line',
        data:   
        {
            labels: rgRowColors,
            datasets: 
            [{
                label: "Red Green Scores #" + (numAttempts + 1),
                data: totRGScore[numAttempts],
                borderWidth: 1,
                borderColor: lineGrad,
                
                pointRadius: 3,
                pointBorderColor: lineGrad,
                pointBackgroundColor: lineGrad,
                
                lineTension: 0,
                
                fill: true,
                backgroundColor: lineGrad
            }]
        }
    });
}

for(let numAttempts = 0; numAttempts < totGBScore.length; numAttempts += 1)
{    
    const canvCont = document.createElement("div");
    canvCont.id = "r1a" + numAttempts + "D";
    canvCont.className = "graphDiv";

    const canv = document.createElement("canvas");
    canv.id = "r1a" + numAttempts;
    canv.className = "graph";

    r1.appendChild(canvCont);
    canvCont.appendChild(canv);

    const ctx = canv.getContext("2d");
    const lineGrad = ctx.createLinearGradient(0, 0, canv.width, 0);
    
    const leftOffSet  = 0.2; // how far from the left side the lines start in percents
    const rightOffSet = 0.0; // how far from the right side the lines stop in percents
    const leftEdge  = 0 + leftOffSet;   
    const rightEdge = 1 - rightOffSet;
    const lineRange = (rightEdge - leftEdge); // Calculate how much range the lines take up
    const stepSize = lineRange/gbRowColors.length; // split the range into n colors steps 
    
    for(let colIndex = 0; colIndex < gbRowColors.length; colIndex += 1)
        lineGrad.addColorStop(colIndex * stepSize + leftEdge, gbRowColors[colIndex]);

    //lineGrad.addColorStop(2/8, "rgb(000, 250, 020)");
    //lineGrad.addColorStop(5/8, "rgb(000, 250, 250)");
    //lineGrad.addColorStop(8/8, "rgb(000, 020, 250)");

    const myChart = new Chart(ctx, 
    {
        type: 'line',
        data:   
        {
            labels: gbRowColors,
            datasets: 
            [{
                label: "Green Blue Scores #" + (numAttempts + 1),
                data: totGBScore[numAttempts],

                borderWidth: 1,
                borderColor: lineGrad,
                
                pointRadius: 3,
                pointBorderColor: lineGrad,
                pointBackgroundColor: lineGrad,
                
                lineTension: 0,
                
                fill: true,
                backgroundColor: lineGrad
            }]
        }
    });
}

for(let numAttempts = 0; numAttempts < totBRScore.length; numAttempts += 1)
{    
    const canvCont = document.createElement("div");
    canvCont.id = "r2a" + numAttempts + "D";
    canvCont.className = "graphDiv";

    const canv = document.createElement("canvas");
    canv.id = "r2a" + numAttempts;
    canv.className = "graph";

    r2.appendChild(canvCont);
    canvCont.appendChild(canv);

    const ctx = canv.getContext("2d");
    const lineGrad = ctx.createLinearGradient(0, 0, canv.width, 0);
    
    const leftOffSet  = 0.2; // how far from the left side the lines start in percents
    const rightOffSet = 0.0; // how far from the right side the lines stop in percents
    const leftEdge  = 0 + leftOffSet;   
    const rightEdge = 1 - rightOffSet;
    const lineRange = (rightEdge - leftEdge); // Calculate how much range the lines take up
    const stepSize = lineRange/brRowColors.length; // split the range into n colors steps 
    
    for(let colIndex = 0; colIndex < brRowColors.length; colIndex += 1)
        lineGrad.addColorStop(colIndex * stepSize + leftEdge, brRowColors[colIndex]);

    //lineGrad.addColorStop(2/8, "rgb(020, 000, 250)");
    //lineGrad.addColorStop(5/8, "rgb(250, 000, 250)");
    //lineGrad.addColorStop(8/8, "rgb(250, 000, 020)");

    const myChart = new Chart(ctx, 
    {
        type: 'line',
        data:   
        {
            labels: brRowColors,
            datasets: 
            [{
                label: "Blue Red Scores #" + (numAttempts + 1),
                data: totBRScore[numAttempts],
                borderWidth: 1,
                borderColor: lineGrad,
                
                pointRadius: 3,
                pointBorderColor: lineGrad,
                pointBackgroundColor: lineGrad,
                
                lineTension: 0,
                
                fill: true,
                backgroundColor: lineGrad
            }]
        }
    });
}