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
    lineGrad.addColorStop(0.0, "rgb(250, 020, 000)");
    lineGrad.addColorStop(0.5, "rgb(255, 255, 000)");
    lineGrad.addColorStop(1.0, "rgb(020, 250, 000)");

    const myChart = new Chart(ctx, 
        {
            type: 'line',
            data:   {
                        labels: rgRowColors,
                        datasets: 
                        [{
                            label: "Red Green Scores",
                            data: totRGScore[numAttempts],

                            borderColor:                lineGrad,
                            pointBorderColor:           "rgb(0, 0, 0)",
                            pointBackgroundColor:       lineGrad,
                            pointRadius: 1,

                            //fill: true,
                            //backgroundColor: lineGrad,
                            //borderWidth: 4
                        }]
                    },
            options:{
                legend: {   position: "bottom"},
                /*
                scales: {
                            yAxes: [{
                                        ticks:      {
                                                        fontColor: "rgba(0,0,0,0.5)",
                                                        fontStyle: "bold",
                                                        beginAtZero: true,
                                                        maxTicksLimit: 5,
                                                        padding: 20
                                                    },
                                        gridLines:  {
                                                        drawTicks: true,
                                                        display: true
                                                    }
                                    }], 
                            xAxes: [{
                                        ticks:      {
                                                        padding: 20,
                                                        fontColor: "rgba(0,0,0,0.5)",
                                                        fontStyle: "bold"
                                                    },
                                        gridLines:  {
                                                        zeroLineColor: "transparent"
                                                    } 
                                    }]
                        }
                */
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
}