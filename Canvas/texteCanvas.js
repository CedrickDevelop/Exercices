
document.addEventListener('DOMContentLoaded',function(){

  // L'objet du DOM Canvas
  let canvasDom = document.querySelector('#canvas');

  // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
  let ctx = canvasDom.getContext('2d');
  
  // On définie la police de caractère pour tous les textes
  ctx.font = 'bold 18px Verdana';

  // Couleur pour écrire Hello
  ctx.fillStyle ='#D125E6';

  // On ecrit Hello
  ctx.fillText('Hello', 1, 50);

  // Couleur pour écrire World
  ctx.fillStyle = '#2223F5';

  // On ecrit World et on se sert de la méthode `measureTexte` pour le place après Hello !
  ctx.fillText('world', 10+ctx.measureText('Hello').width+10, 50);

  // Couleur pour écrire !
  ctx.fillStyle = '#54D144';

  // On ecrit !
  ctx.fillText('!', 10 +ctx.measureText('Hello').width + ctx.measureText('world').width+20, 50);
 
});