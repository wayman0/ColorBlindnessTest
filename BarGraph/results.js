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
    
    const myChart = new Chart(ctx, 
    {
        type: 'bar',
        data:   
        {
            labels: rgRowColors,
            datasets: 
            [{
                label: "Red Green Scores # (" + (numAttempts + 1) + ")",
                data: totRGScore[numAttempts],

                backgroundColor: rgRowColors
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
    
    const myChart = new Chart(ctx, 
    {
        type: 'bar',
        data:   
        {
            labels: gbRowColors,
            datasets: 
            [{
                label: "Green Blue Scores # (" + (numAttempts + 1) + ")",
                data: totGBScore[numAttempts],

                backgroundColor: gbRowColors
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
    
    const myChart = new Chart(ctx, 
    {
        type: 'bar',
        data:   
        {
            labels: brRowColors,
            datasets: 
            [{
                label: "Blue Red Scores # (" + (numAttempts + 1) + ")",
                data: totBRScore[numAttempts],

                backgroundColor: brRowColors
            }]
        }
    });
}