const results = document.getElementById("results");
const all = document.getElementById("results");

const totRYScore = window.opener.totRYScore;
const totYGScore = window.opener.totYGScore;
const totGCScore = window.opener.totGCScore;
const totCBScore = window.opener.totCBScore;
const totBPScore = window.opener.totBPScore;
const totPRScore = window.opener.totPRScore;

buildGraph();

function buildGraph()
{
    const minData = min(totRYScore.length, totYGScore.length, 
                        totGCScore.length, totCBScore.length,
                        totBPScore.length, totPRScore.length);              
 
    let minNum = minData[0];
    let minInd = minData[1];

    for(let x = 0; x < minNum; x += 1)
    {
        const canvCont = document.createElement("div");
        canvCont.id = "all" + x + "D";
        canvCont.className = "graphDiv";
    
        const canv = document.createElement("canvas");
        canv.id = "all" + x;
        canv.className = "graph";
    
        all.appendChild(canvCont);
        canvCont.appendChild(canv);
    
        const colLabel = [  
                            "red-yellow", 
                            "yellow-green", 
                            "green-cyan", 
                            "cyan-blue", 
                            "blue-purple", 
                            "purple-red"
                         ];

        const colData =  [  
                            totRYScore[x], totYGScore[x], 
                            totGCScore[x], totCBScore[x], 
                            totBPScore[x], totPRScore[x]
                         ];
        
        const w = canv.width;
        const h = canv.height;
        const ctx = canv.getContext("2d");
    
        const pointGrad = ctx.createConicGradient(0, w/2, h/2);
        pointGrad.addColorStop(0/5, "rgb(255, 000, 000)");
        pointGrad.addColorStop(1/5, "rgb(255, 255, 000)");
        pointGrad.addColorStop(2/5, "rgb(000, 255, 000)");
        pointGrad.addColorStop(3/5, "rgb(000, 255, 255)");
        pointGrad.addColorStop(4/5, "rgb(000, 000, 255)");
        pointGrad.addColorStop(5/5, "rgb(255, 000, 255)");

        const fillGrad  = ctx.createConicGradient(0, w/2, h/2);
        fillGrad.addColorStop(0/6, "rgb(255, 000, 000)");
        fillGrad.addColorStop(1/6, "rgb(255, 255, 000)");
        fillGrad.addColorStop(2/6, "rgb(000, 255, 000)");
        fillGrad.addColorStop(3/6, "rgb(000, 255, 255)");
        fillGrad.addColorStop(4/6, "rgb(000, 000, 255)");
        fillGrad.addColorStop(5/6, "rgb(255, 000, 255)");
        fillGrad.addColorStop(6/6, "rgb(255, 000, 000)")

        ctx.fillStyle = fillGrad;
        ctx.fillRect(0, 0, w, h);
    
        const radar = new Chart(canv.getContext("2d"), 
        {
            type:'radar',
            data:   
            {
                labels:colLabel,
                datasets:   
                [{
                    label:"Score", 
                    data: colData,
                    
                    borderWidth: 1,
                    borderColor: pointGrad,
        
                    pointRadius: 3,
                    pointStyle: "circle",
                    pointBorderColor: pointGrad,
                    pointBackgroundColor: pointGrad,
        
                    fill:false,
                    //backgroundColor: pointGrad
                }]
            }
        });   
    }    
}

function min(... nums)
{
    let small = Number.MAX_VALUE;
    let index = 0;

    for(let i = 0; i < nums.length; i += 1)
    {   
        const n = nums[i];

        if(n < small)
        {    
            small = n;
            index = i;
        }
    }

    return [small, index];
}