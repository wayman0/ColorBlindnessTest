const r0 = document.getElementById("row0");
const r1 = document.getElementById("row1");
const r2 = document.getElementById("row2");
const all = document.getElementById("all");

const totRYScore = window.opener.totRYScore;
const totYGScore = window.opener.totYGScore;
const totGCScore = window.opener.totGCScore;
const totCBScore = window.opener.totCBScore;
const totBPScore = window.opener.totBPScore;
const totPRScore = window.opener.totPRScore;

for(let numAttempts = 0; numAttempts < totRYScore.length; numAttempts += 1)
{
    const canvCont = document.createElement("div");
    canvCont.id = "r0a" + numAttempts + "D";
    canvCont.className = "graphDiv";

    const canv = document.createElement("canvas");
    canv.id = "r0a" + numAttempts;
    canv.className = "graph";

    r0.appendChild(canvCont);
    canvCont.appendChild(canv);

    //fillBackgroundR0(canv);

    const colLabel = ["red-yellow", "yellow-green"];
    const colData =  [totRYScore[numAttempts], totYGScore[numAttempts]];

    /*
    const chartData = 
    {
        labels: colLabel,
        datasets:[ 
                    {
                        fillColor:       "rgba(220, 220, 220, 0.50)",
                        strokeColor:     "rgba(220, 220, 220, 0.80)",
                        highlightFill:   "rgba(220, 220, 220, 0.75)",
                        highlightStroke: "rgba(220, 220, 220, 1.00)",

                        data: colData
                    } 
                 ]                
    };

    const radar = new Chart(canv.getContext("2d")).Radar(chartData);
    */

    const w = canv.width;
    const h = canv.height;
    const ctx = canv.getContext("2d");

    const lineGrad = ctx.createLinearGradient(0, 0, 0, h);
    lineGrad.addColorStop(0.00, "rgb(255, 000, 000)");
    lineGrad.addColorStop(0.50, "rgb(255, 255, 000)");
    lineGrad.addColorStop(1.00, "rgb(000, 255, 000)");

    const radar = new Chart(canv.getContext("2d"), 
        {
            type:'radar',
            data:   {
                        labels:colLabel,
                        datasets:   [{
                                        label:"Row 1 Score", 

                                        borderColor:                lineGrad,
                                        pointBorderColor:           lineGrad,
                                        pointBackgroundColor:       lineGrad,
                                        pointHoverBackgroundColor:  lineGrad,
                                        pointHoverBorderColor:      lineGrad,

                                        pointBorderWidth: 10,
                                        pointHoverRadius: 10,
                                        pointHoverBorderWidth: 1,
                                        pointRadius: 3,

                                        fill: false,
                                        borderWidth: 4,
                                        data: colData
                                    }]
                    }
        });

}

for(let numAttempts = 0; numAttempts < totGCScore.length; numAttempts += 1)
{
    const canvCont = document.createElement("div");
    canvCont.id = "r1a" + numAttempts + "D";
    canvCont.className = "graphDiv";

    const canv = document.createElement("canvas");
    canv.id = "r1a" + numAttempts;
    canv.className = "graph";

    r1.appendChild(canvCont);
    canvCont.appendChild(canv);

    const colLabel = ["green-cyan", "cyan-blue"];
    const colData =  [totGCScore[numAttempts], totCBScore[numAttempts]];
    const chartData = 
    {
        labels: colLabel,
        datasets:[ 
                    {
                        fillColor:       "rgba(220, 220, 220, 0.50)",
                        strokeColor:     "rgba(220, 220, 220, 0.80)",
                        highlightFill:   "rgba(220, 220, 220, 0.75)",
                        highlightStroke: "rgba(220, 220, 220, 1.00)",
                        data: colData
                    } 
                 ]                
    };
    const radar = new Chart(canv.getContext("2d")).Radar(chartData);
}

for(let numAttempts = 0; numAttempts < totBPScore.length; numAttempts += 1)
{
    const canvCont = document.createElement("div");
    canvCont.id = "r2a" + numAttempts + "D";
    canvCont.className = "graphDiv";

    const canv = document.createElement("canvas");
    canv.id = "r2a" + numAttempts;
    canv.className = "graph";

    r2.appendChild(canvCont);
    canvCont.appendChild(canv);

    const colLabel = ["blue-purple", "purple-red"];
    const colData =  [totBPScore[numAttempts], totPRScore[numAttempts]];
    const chartData = 
    {
        labels: colLabel,
        datasets:[ 
                    {
                        fillColor:       "rgba(220, 220, 220, 0.50)",
                        strokeColor:     "rgba(220, 220, 220, 0.80)",
                        highlightFill:   "rgba(220, 220, 220, 0.75)",
                        highlightStroke: "rgba(220, 220, 220, 1.00)",
                        data: colData
                    } 
                 ]                
    };
    const radar = new Chart(canv.getContext("2d")).Radar(chartData);
}

if(totRYScore.length == totGCScore.length && totGCScore.length == totBPScore.length)
    showAllResults();

function showAllResults()
{
    for(let numAttempts = 0; numAttempts < totBPScore.length; numAttempts += 1)
    {
        const canvCont = document.createElement("div");
        canvCont.id = "all" + numAttempts + "D";
        canvCont.className = "graphDiv";
    
        const canv = document.createElement("canvas");
        canv.id = "all" + numAttempts;
        canv.className = "graph";
    
        all.appendChild(canvCont);
        canvCont.appendChild(canv);
    
        const colLabel = [  "red-yellow", 
                            "yellow-green", 
                            "green-cyan", 
                            "cyan-blue", 
                            "blue-purple", 
                            "purple-red"];

        const colData =  [  totRYScore[numAttempts], 
                            totYGScore[numAttempts], 
                            totGCScore[numAttempts], 
                            totCBScore[numAttempts], 
                            totBPScore[numAttempts], 
                            totPRScore[numAttempts]];

        const chartData = 
        {
            labels: colLabel,
            datasets:[ 
                        {
                            fillColor:       "rgba(220, 220, 220, 0.50)",
                            strokeColor:     "rgba(220, 220, 220, 0.80)",
                            highlightFill:   "rgba(220, 220, 220, 0.75)",
                            highlightStroke: "rgba(220, 220, 220, 1.00)",
                            data: colData
                        } 
                     ]                
        };

        const radar = new Chart(canv.getContext("2d")).Radar(chartData);
    }
}

function fillBackgroundR0(canv)
{
    alert("filling canvas");

    const w = canv.width;
    const h = canv.height;

    const ctx = canv.getContext("2d");
    
    const lineGrad = ctx.createLinearGradient(0, 0, 0, h);
    lineGrad.addColorStop(0.00, "rgb(255, 000, 000)");
    lineGrad.addColorStop(0.50, "rgb(255, 255, 000)");
    lineGrad.addColorStop(1.00, "rgb(000, 255, 000)");

    ctx.fillStyle = lineGrad;
    ctx.fillRect(0, 0, w, h);
}

function fillBackgroundR1(canv)
{

}

function fillBackgroundR2(canv)
{

}