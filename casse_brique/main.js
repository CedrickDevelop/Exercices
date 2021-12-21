'use strict'

// ***** VARIABLES ****************************************
const ball = document.querySelector("#ball");
const btn_pause = document.querySelector("#button");
const tablet = document.querySelector("#tablette")


let screen_width;
let screen_height;

let move =  100;
let sens_x = 1 ;
let sens_y = 1 ;

let pos_ball_x;
let pos_ball_y;

let pos_tablet_x;
let distance_move = 10;

let animation_id;


// ***** FONCTIONS ****************************************
/**
 * Definition de la position de la balle sur X
 */
function ball_position_x(){
  pos_ball_x = parseInt(ball.style.left);
  pos_ball_x += 5 * sens_x;
  ball.style.left = pos_ball_x + "px";
}

/**
 * Definit un arret lorsque cela est cliqué
 */
function pause_animation(){
  if (btn_pause.classList == "btn btn-primary"){
    window.cancelAnimationFrame(animation_id);
    btn_pause.innerHTML = "Reprendre";
    btn_pause.classList.add("btn-danger");
    btn_pause.classList.remove("btn-primary");
  }
  else {
    action_move_ball();
    btn_pause.innerHTML = "Pause";
    btn_pause.classList.add("btn-primary");
    btn_pause.classList.remove("btn-danger");
  }
  
}


function move_tablet(event){
  let key = event.keyCode;
  switch(key) {
    case 37: action_move_tablet(-1)//move left direction -1
      break;
    case 39: action_move_tablet(1)//move right direction 1
      break;
    default:
      break;    
  }
}

/**
 * faire se deplacer la tablette
 */
 function action_move_tablet(direction_key){
  pos_tablet_x = tablet.getBoundingClientRect().left;  
  // let place_tablet = tablet.style.left;
 
  if ((direction_key == "-1" ) && (pos_tablet_x > 50 )){
    tablet.style.left = (pos_tablet_x - distance_move) + "px";
  }
  else if ((direction_key == "1") && (pos_tablet_x < screen_width - 100)){
    tablet.style.left = (pos_tablet_x + distance_move) + "px";
  }
 }

/**
 * Definition de la position de la balle sur Y
 */
function ball_position_y(){
  pos_ball_y = parseInt(ball.style.top);
  // console.log(pos_ball_y);
  pos_ball_y += 5 * sens_y;
  ball.style.top = pos_ball_y + "px";
}

/**
 * function callback
 * Definition de la taille de la fenetre du navigateur dynamique
 */
function screen_size(){
  screen_width = window.innerWidth - ball.clientWidth;
  screen_height = window.innerHeight - ball.clientHeight;
  window.requestAnimationFrame(screen_size);
}

/**
 * Fonctions callback
 * Request animation Frame
 */ 
function action_move_ball(){
  animation_id = window.requestAnimationFrame(action_move_ball); 

  ball_position_x()  
  ball_position_y()  

  if (pos_ball_x > screen_width || pos_ball_x < 0  ){
    sens_x *= -1;
  } 
  if (pos_ball_y > screen_height || pos_ball_y < 0  ){
    sens_y *= -1;
  } 
}


// ***** MAIN ****************************************
/**
 * Fonction principale qui dirige l'animation
 */
function main(){
  document.addEventListener("click", pause_animation)
  window.addEventListener("keypress", pause_animation)

  window.addEventListener("keydown", function(event) { move_tablet(event) })

  window.requestAnimationFrame(screen_size);
  window.requestAnimationFrame(action_move_ball); 
}

document.addEventListener("DOMContentLoaded", main)

