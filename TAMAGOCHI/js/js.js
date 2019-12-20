'use strict';

let foodPg = document.getElementById('foodProg'),
    cleanPg = document.getElementById('cleanProg'),
    happinessPg = document.getElementById('happinessProg'),
    countSec = 0,
    isGameOver = true,
    isGameScore = true;

document.getElementById('easyLevelBtn').onclick = function() {
    start();
    setInterval(easyDiff, 5000);
    setInterval(duringLife, 1000);
    setInterval(gameOver, 100);
}

document.getElementById('hardLevelBtn').onclick = function() {
    start();
    setInterval(hardDiff, 5000);
    setInterval(duringLife, 1000);
    setInterval(gameOver, 100);
}

function start() {
    document.querySelector('.start').hidden = true;

    let actions = document.querySelector('.actions'),
        style = actions.style,
        countFood = Math.ceil(Math.random() * (100 - 50) + 50),
        countClean = Math.ceil(Math.random() * (100 - 50) + 50),
        countHappiness = Math.ceil(Math.random() * (100 - 50) + 50),
        countSec = 0,
        isGameOver = true,
        isGameScore = true;

    foodPg.value = countFood;
    cleanPg.value = countClean;
    happinessPg.value = countHappiness;
    actions.classList.add('actions-on');
    if(isGameOver == false) {
        actions.classList.remove('actions-on');
    }
    document.getElementById('eatBtn').onclick = function() {
        if(countFood <= 70 && countFood > 0){ 
        countFood += 30;
        countClean -= 20;
    
        foodPg.value = countFood;
        cleanPg.value = countClean;
        } else if(countFood > 70 && countFood <= 100) {
            countFood = 100
            countClean -= 20;
    
            foodPg.value = countFood;
            cleanPg.value = countClean;
        }
    }
    
    document.getElementById('washBtn').onclick = function() {
        if(countClean <= 60 && countClean > 0){ 
        countClean += 40;
        countHappiness -= 20;
    
        happinessPg.value = countHappiness;
        cleanPg.value = countClean;
        } else if(countClean > 60 && countClean <= 100) {
            countClean = 100
            countHappiness -= 20;
    
            happinessPg.value = countHappiness;
            cleanPg.value = countClean;
        }
    }
    
    document.getElementById('runBtn').onclick = function() {
        if(countHappiness <= 85 && countHappiness > 0){ 
    
        countHappiness += 15;
        countFood -= 10;
    
        happinessPg.value = countHappiness;
        foodPg.value = countFood;
        } else if(countHappiness > 85 && countHappiness <= 100) {
            countHappiness = 100
            countFood -= 20;
    
            happinessPg.value = countHappiness;
            foodPg.value = countFood;
        }
    }
}



function easyDiff() {
    countFood -= 3;
    countClean -= 3;
    countHappiness -= 3;

    foodPg.value = countFood;
    happinessPg.value = countHappiness;
    cleanPg.value = countClean;
}

function hardDiff() {
    countFood -= 5;
    countClean -= 5;
    countHappiness -= 5;

    foodPg.value = countFood;
    happinessPg.value = countHappiness;
    cleanPg.value = countClean;
}

function duringLife() {
    if(isGameScore){
    countSec += 1;

    if(foodPg.value <= 0 || cleanPg.value <= 0 || happinessPg.value <= 0) {
        alert('You have been lived for ' + countSec + ' seconds')
        isGameScore = false;
    }
    }
}
function gameOver(){
    if(isGameOver){
    if(foodPg.value <= 0 || cleanPg.value <= 0 || happinessPg.value <= 0) {
        document.querySelector('.actions').hidden = true;
        document.querySelector('.start').hidden = false;
        isGameOver = false;
    }
    }
}