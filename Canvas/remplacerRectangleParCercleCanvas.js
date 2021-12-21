'use strict';

// On défini le propriété de notre cercle que l'on va dessiner dans un objet 
let circle = {
  color: "#FF0000",
  radius:10,
  x:20,
  y:20
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions let canvasDom; let ctx;

// Dès que le DOM est chargé on commence 
document.addEventListener('DOMContentLoaded', function () {

// L'objet du DOM Canvas
canvasDom = document.querySelector('#canvas');

// Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
ctx = canvasDom.getContext('2d');

// On dessine notre cercle la première fois
displayCircle();

//Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier 
document.addEventListener('keydown', moveCircle);
});

/**
 * Gestionnaire d'évènement clavier
 * @param {event} e l'évènement keydown 
 */ 
  function moveCircle(e) {
// on détecte la touche et la direction puis on change les coordonnées 
  switch(e.key) {
  case 'ArrowRight':
      if (circle.x + circle.radius < canvasDom.width) circle.x++;
      break;
  case 'ArrowLeft':
      if (circle.x - circle.radius > 0) circle.x--;
      break;
  case 'ArrowUp':
      if (circle.y - circle.radius > 0) circle.y--;
      break;
  case 'ArrowDown':
      if (circle.y + circle.radius < canvasDom.height) circle.y++;
      break;
  }

  // On dessine notre cercle 
  displayCircle(); 
}

/**
 * Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte
 * 
 *  */
function displayCircle() { 
  // On vide le Canvas avant de redessiner 
  ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

// On dit au contexte que la couleur de remplissage est gris 
ctx.fillStyle = '#DDDDDD'; 

// On rempli le Canvas de gris en fond 
ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

// On dit au contexte que la couleur de remplissage est rouge 
ctx.fillStyle = circle.color;

//On trace un nouveau cercle rempli/ 
// on commence le tracé 
ctx.beginPath(); 

// on trace un arc fermé (un cercle) 
ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);

// on dessine sur le canvas en remplissant le tracé 
ctx.fill(); 

// On aurait pu dessiner sur le Canvas seulement le contour ! 
//ctx.stroke(); 
}
