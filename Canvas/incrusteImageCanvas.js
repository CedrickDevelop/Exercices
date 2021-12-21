'use strict';

document.addEventListener('DOMContentLoaded', function () {

    // L'objet du DOM Canvas
    let canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    let ctx = canvasDom.getContext('2d');

    // On créer un nouvel Objet du DOM avec JS.
    let myImg = new Image();

    // On définie la source de cette image
    myImg.src = './Orcs/images/ChefOrc.png';

    // Quand l'image est chargée par le navigateur on la place dans le Canvas
    myImg.onload = function () {
        //On place l'image
        ctx.drawImage(myImg,10,10);
    };

    // Mais c'est un peu long tout ça si on veut ajouter plusieurs images
    // Et pourquoi ne pas créer notre fonction pour ajouter facilement plusieurs images
    addImage('./Orcs/images/darkVador.jpg', 400, 10, ctx);
    addImage('./Orcs/images/humain2.png', 10, 200, ctx);

});

/** Ajoute une image à un context2D
 * @param {string} src source de l'image
 * @param {integer} posX position X de l'image dans le Canvas
 * @param {integer} posY position Y de l'image dans le Canvas
 * @param {CanvasRenderingContext2D} ctx le context lié à notre Canvas
 */
function addImage(src, posX, posY, ctx)
{
    // On créer un nouvel Objet du DOM avec JS (HTMLImageElement).
    let myImg = new Image(); // absolument équivalent à la création d'un noeud <img> avec document.createElement('img').

    // On définie la source de cette image
    myImg.src = src;

    // Quand l'image est chargée par le navigateur on la place dans le Canvas
    myImg.onload = function () {
        //On place l'image
        ctx.drawImage(myImg, posX, posY);
    };
}