let countIt = 0;
let isDifficultySelected = false;
let timer = null;
let startTime = 0;

function startTimer() {
    console.log("Timer started"); // Debugging line
    startTime = Date.now();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime; // Time elapsed in milliseconds
    timePassed = Math.floor(elapsedTime / 1000); // Convert to seconds
    document.getElementById('timePassed').innerHTML = timePassed;
    console.log("Timer updated", timePassed);
}

function stopTimer() {
    console.log("Timer stopped");
    clearInterval(timer);
    document.getElementById('timePassed').innerHTML = 0; // Reset display when stopped
}


function count() { 
    if (isDifficultySelected) {
    countIt = parseInt(1) + parseInt(countIt); 
    var scr = document.querySelector('.countScore'); 
    scr.innerHTML = countIt; 
    }
} 

function easy() {
    startTimer();
    document.querySelector('.characters img').style.animationDuration = '20s';
    document.querySelector('.characters img').className = 'after img';
    isDifficultySelected = true;
}

// Setting the level to Medium by having the 
// duration of the whole animation to the maximum  
function medium() { 
    startTimer();
    document.querySelector('.characters img').style.animationDuration = '15s';
    document.querySelector('.characters img').className = 'after img';
    isDifficultySelected = true;
}

// Setting the level to Hard by having the 
// duration of the whole animation to the maximum 
function hard() { 
    startTimer();
    document.querySelector('.characters img').style.animationDuration = '12s';
    document.querySelector('.characters img').className = 'after img';
    isDifficultySelected = true;
}

function restart() { 
    window.location.reload(); 
    isDifficultySelected = false;
    stopTimer();
} 

window.onbeforeunload = stopTimer;