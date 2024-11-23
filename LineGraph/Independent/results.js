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

    for(let colIndex = 0; colIndex < rgRowColors.length-1; colIndex += 1)
        lineGrad.addColorStop(colIndex/(rgRowColors.length-1), rgRowColors[colIndex]);

    //lineGrad.addColorStop(0.0, "rgb(255, 000, 000)");
    //lineGrad.addColorStop(0.5, "rgb(255, 255, 000)");
    //lineGrad.addColorStop(1.0, "rgb(000, 255, 000)");
    
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
    for(let colIndex = 0; colIndex < gbRowColors.length-1; colIndex += 1)
        lineGrad.addColorStop(colIndex/(gbRowColors.length-1), gbRowColors[colIndex]);

    //lineGrad.addColorStop(0.0, "rgb(000, 255, 000)");
    //lineGrad.addColorStop(0.5, "rgb(000, 255, 255)");
    //lineGrad.addColorStop(1.0, "rgb(000, 000, 255)");

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
    for(let colIndex = 0; colIndex < brRowColors.length-1; colIndex += 1)
        lineGrad.addColorStop(colIndex/(brRowColors.length-1), brRowColors[colIndex]);

    //lineGrad.addColorStop(0.0, "rgb(000, 000, 255)");
    //lineGrad.addColorStop(0.5, "rgb(255, 000, 255)");
    //lineGrad.addColorStop(1.0, "rgb(255, 000, 000)");

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