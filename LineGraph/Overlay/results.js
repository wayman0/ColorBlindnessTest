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
    //const delta = 1/25;
    //for(let x = 0; x < rgRowColors.length-1; x += 1)
    //        lineGrad.addColorStop(x*delta, rgRowColors[x]);

    lineGrad.addColorStop(0.0, "rgba(255, 000, 000, 1)");
    lineGrad.addColorStop(0.5, "rgba(255, 255, 000, 1)");
    lineGrad.addColorStop(1.0, "rgba(000, 255, 000, 1)");

    ctx.fillStyle = lineGrad;
    ctx.fillRect(0, 0, canv.width, canv.height);

    const myChart = new Chart(ctx, 
    {
        type: 'line',
        data:   
        {
            labels: rgRowColors,
            datasets: 
            [{
                label: "Red Green Score #" + (numAttempts + 1),
                data: totRGScore[numAttempts],

                borderWidth: 1,
                borderColor: "black",

                pointRadius: 3,
                pointBorderColor: "black",//lineGrad,
                pointBackgroundColor: "black",//lineGrad,

                lineTension: 0,
                
                fill: false,
                //backgroundColor: lineGrad
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
    lineGrad.addColorStop(0.0, "rgb(000, 255, 000)");
    lineGrad.addColorStop(0.5, "rgb(000, 255, 255)");
    lineGrad.addColorStop(1.0, "rgb(000, 000, 255)");

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

    canvCont.style.background = "linear-gradient(to right, rgb(000, 000, 255), rgb(255, 000, 255), rgb(255, 000, 000))";
    const ctx = canv.getContext("2d");
    
    const lineGrad = ctx.createLinearGradient(0, 0, canv.width, 0);
    lineGrad.addColorStop(0.0, "rgb(000, 000, 255)");
    lineGrad.addColorStop(0.5, "rgb(255, 000, 255)");
    lineGrad.addColorStop(1.0, "rgb(255, 000, 000)");

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
                borderColor: "black",

                pointRadius: 3,
                pointBorderColor: "black",
                pointBackgroundColor: "black",

                lineTension: 0,

                fill: false,
                //backgroundColor: lineGrad
            }]
        }
    });
}

const minAttempts = Math.min(totRGScore.length, totGBScore.length, totBRScore.length);
for(let numAttempts = 0; numAttempts < minAttempts; numAttempts += 1)
{    
    const canvCont = document.createElement("div");
    canvCont.id = "all" + numAttempts + "D";
    canvCont.className = "graphDiv";

    const canv = document.createElement("canvas");
    canv.id = "all" + numAttempts;
    canv.className = "graph";

    all.appendChild(canvCont);
    canvCont.appendChild(canv);

    const ctx = canv.getContext("2d");
    
    const xLabel = new Array(rgRowColors.length);
    for(let index = 0; index < xLabel.length; index += 1)
            xLabel[index] = "Stop " + (index + 1);

    const myChart = new Chart(ctx, 
    {
        type: 'line',
        data:   
        {
            labels: xLabel,
            datasets: 
            [{
                // create the red green line
                    data: totRGScore[numAttempts],
                    borderColor: "red", 
                    fill: false
                }, 

                // create the green blue line
                {
                    data: totGBScore[numAttempts],
                    borderColor: "green", 
                    fill: false
                },

                // create the blue red line
                {
                    data: totBRScore[numAttempts],
                    borderColor: "blue", 
                    fill: false
            }]
        },
        options: 
        {
            legend: 
            {
                display: false
            }
        }
    });
}