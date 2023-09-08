var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score;
}

function hitChange(){
    hitrn = Math.floor(Math.random()*10);
    document.getElementById("hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";
    for(var i=0; i<200; i++){
        let dig = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${dig}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timeInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{  
            document.querySelector("#pbtm").innerHTML =  `<h1>Score: ${score}</h1>`;
            clearInterval(timeInterval);
        }
    }, 1000);
}

function beginGame(){
    hitChange();
    runTimer();
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber == hitrn ){
        increaseScore();
        makeBubble();
        hitChange();
    }
});

document.querySelector("#start").addEventListener("click", function(){
    beginGame();
});

makeBubble();
