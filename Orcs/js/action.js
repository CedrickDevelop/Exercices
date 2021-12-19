// PERSONNAGES ---------------
// let nom_perso1 = window.prompt("Quel nom  perso 1")
// let nom_perso2 = window.prompt("Quel nom  perso 2")

// test
let nom_perso1 = "toto1"
let nom_perso2 = "toto2"

// let perso1 = new Creature(nom_perso1)
// let Orc1 = new Orc(nom_perso2)
// let Orc2 = new Orc(nom_perso2)
let perso1 = new Urukhai(nom_perso1)
let perso2 = new ChieffOrc(nom_perso2)

// Click Bouton identity---------------
function infoPerso1() {
  nom_action1.innerHTML = perso1.nameCreature  + " || force : " +  perso1.strength;
}
function infoPerso2() {
  nom_action2.innerHTML = perso2.nameCreature + " || force : " + perso2.strength;
}

btn_identity.addEventListener("click", function() {
  infoPerso1();
  infoPerso2();
});


btn_attack1.addEventListener("click", function() {
  let attack = perso1.attack(perso2)

  if (attack == true ){
    text_action1.innerHTML = "attack 1"
    text_action2.innerHTML = perso2.sayOuch()
    nom_action1.innerHTML = perso1.strength
    nom_action2.innerHTML = perso2.strength
    
  }
  if (attack == false){
    nom_action1.innerHTML = perso1.strength
    text_action1.innerHTML = "You win"
    nom_action2.innerHTML = "dead"
    text_action2.innerHTML = "You loose"
  }
});

btn_attack2.addEventListener("click", function() {
  // let attack = perso2.attack(perso1)  
  let attack = perso2.attack(perso1)

  // if (attack1 == true && attack2 == true){
  if (attack == true ){
    text_action2.innerHTML = "attack 2"
    text_action1.innerHTML = perso1.sayOuch()
    nom_action1.innerHTML = perso1.strength
    nom_action2.innerHTML = perso2.strength
    
  }
  if (attack == false){
    nom_action2.innerHTML = perso2.strength
    text_action2.innerHTML = "You win"
    nom_action1.innerHTML = "dead"
    text_action1.innerHTML = "You loose"
  }
});




perso1.scream("Fuuuuucccckkkkk")
perso1.scream("Je suis fatigué et j'ai faimmmmmm mmmhhh")
perso1.identity()

perso2.scream("Tais-toi bitch")
perso2.attack(perso1)

// Urukai.kill(perso2)
perso2.identity()

// Chef.identity()
// Chef.giveOrder(Urukai, " Arrete de tuer tout le monde !!!!")
