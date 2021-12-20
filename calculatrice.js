'use strict'

// ***************** LES CONSTANTES ***********************
let chronoDisplay;
let btn_start;
let btn_reset;

let timeout;
let timeout2;

let chrono = 
{
  mili: 0,
  secondes: 0,
  minutes: 0,
}

let chronoDisplayTime =
{
  mili: 0,
  secondes: 0,
  minutes: 0,
}

let tour;
let click = 0;

let clickCount = 0;

// ***************** LES CONSTANTES ***********************

// Mise a jour de l'affichage du chrono
function updateChrono(){
  
  timeout2 = window.setTimeout(updateChrono, 10);
  

  chrono.mili ++

  if ( Number.isInteger(chrono.mili / 100)){
    chrono.secondes ++;
    chrono.mili = 0;
  }
  
  if (chrono.secondes > 59){
    chrono.minutes++;
    chrono.secondes = 0;
  }

  if (chrono.minutes < 10){
    chronoDisplayTime.minutes = "0"+ chrono.minutes
  } else {
    chronoDisplayTime.minutes = chrono.minutes
  }
  if (chrono.secondes < 10){
    chronoDisplayTime.secondes = "0"+ chrono.secondes
  } else {
    chronoDisplayTime.secondes = chrono.secondes
  }
  
  tour = chronoDisplayTime.minutes + ":" + chronoDisplayTime.secondes + ":" + chrono.mili;
  chronoDisplay.innerHTML = chronoDisplayTime.minutes + ":" + chronoDisplayTime.secondes + ":" + chrono.mili;
}

function ajoutTour(){
  click++
  let tourDisplay = document.querySelector("#tour");
  tourDisplay.innerHTML += "<tr><th scope='row'>" + click + "</th>"+"<td>" + tour + "</td></tr>"
}

function stopBtn(){
    btn_start.innerHTML = "Stop";
    btn_start.classList.add("btn-danger");
    btn_start.classList.remove("btn-primary");
    
}
function startBtn(){
  btn_start.innerHTML = "Start";
  btn_start.classList.add("btn-primary");
  btn_start.classList.remove("btn-danger");
}
function startAgainBtn(){
  btn_start.innerHTML = "start-again";
  btn_start.classList.add("btn-primary");
  btn_start.classList.remove("btn-danger");
}
function resetChrono(){
  chronoDisplay.innerHTML = "00:00:00";
  chrono.secondes = 0;
  chrono.minutes = 0;
  chrono.mili = 0;
  startBtn();
  clickCount = 0
  window.clearTimeout(timeout);
  window.clearTimeout(timeout2);

}

function main(){ 

  chronoDisplay = document.querySelector("#chrono");  
  btn_start = document.getElementById("start");
  btn_reset = document.getElementById("reset"); 

  btn_start.addEventListener("click", function(){
    clickCount++
    if (clickCount%2 !== 0){
      stopBtn()
      updateChrono()
    } 
    if (clickCount%2 == 0){
      startAgainBtn()
      ajoutTour();
      window.clearTimeout(timeout);
      window.clearTimeout(timeout2);
    }
    
  }) 

  btn_reset.addEventListener("click", resetChrono)

}
 

document.addEventListener("DOMContentLoaded", main)





  





// window.addEventListener("load", function(){
//   let chrono = document.getElementById("chrono");

//   let timerMilisecondes = 0 ;
//   let timerDixSecondes = 0;
//   let timerSecondes = 0
 

//   function timeout(){

    
//     //Calcul dixieme de secondes 
//     if (Number.isInteger(timerMilisecondes /60)){
//       timerDixSecondes++;
//     }

//     let miliSecondes = timerDixSecondes;
    
  
//     //Calcul de secondes 
//     if(Number.isInteger(timerDixSecondes /60)) {
//       timerSecondes++
//       miliSecondes = 0;
//     }
   

//     chrono.innerHTML = timerSecondes ;

  
//     clearTimeout;
//     window.requestAnimationFrame(timeout)
//   }

//   setTimeout(timeout,1000)
// })



