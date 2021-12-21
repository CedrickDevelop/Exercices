/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

const temps = 250
const dist = 100

let box = document.querySelector('.red');
let modal = document.querySelector('.modal');
let btnClick = document.getElementById('moveDiv');
let btnHide = document.getElementById('hideModal');

function deplacementDroite(){

  box.innerHTML = '<h2> DROITE <h2>';
  box.classList.add("transitionDroite");
}
function deplacementBas(){
  box.style.left = dist + "px";
  box.innerHTML = '<h2> BAS <h2>';
  box.classList.add("transitionBas");
}
function deplacementGauche(){
  box.style.top = dist + "px";
  box.style.left = dist + "px";
  box.innerHTML = '<h2> BAS <h2>';
  box.classList.add("transitionGauche");
}
function deplacementHaut(){
  box.style.left = "0px";
  box.style.top = dist + "px";
  box.innerHTML = '<h2> HAUT <h2>';
  box.classList.add("transitionHaut");
}




function afficheModal(){
  modal.style.display = 'block'
}

btnClick.addEventListener("click", function ()
{
  btnClick.classList.add("btn-danger");
  modal.style.display = 'none';
  deplacementDroite();
  setTimeout(deplacementBas, 3 * temps)
  setTimeout(deplacementGauche, 6 * temps)
  setTimeout(deplacementHaut, 8 * temps)
  setTimeout(modalBlock, 10 * temps)
  
})

function modalBlock()
{
  modal.style.display = 'block';
  modal.classList.add("transitionDroite")
}

btnHide.addEventListener("click", function ()
{
  modal.style.display = 'none'  
})

