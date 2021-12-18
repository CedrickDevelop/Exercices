

// PERSONNAGES ---------------
// let nom_perso1 = window.prompt("Quel nom  perso 1")
// let force_perso1 = window.prompt("Quelle force perso 1")

// let nom_perso2 = window.prompt("Quel nom  perso 2")
// let force_perso2 = window.prompt("Quelle force perso 2")

// test
let nom_perso1 = "toto1"
let nom_perso2 = "toto2"

// let perso1 = new Creature(nom_perso1)
// let Orc1 = new Orc(nom_perso2)
// let Orc2 = new Orc(nom_perso2)
let perso1 = new Urukhai(nom_perso1)
let perso2 = new ChieffOrc(nom_perso2)


// Click Bouton identity---------------
function nomPerso1() {
  nom_action1.innerHTML =perso1.nameCreature + " || force : " + perso1.strength;
}
function nomPerso2() {
  nom_action2.innerHTML = perso2.nameCreature + " || force : " + perso2.strength;
}

btn_identity.addEventListener("click", function() {
  nomPerso1();
  nomPerso2();
});

btn_attack.addEventListener("click", function() {
  text_action1
  text_action2
});




perso1.scream("Fuuuuucccckkkkk")
perso1.scream("Je suis fatigué et j'ai faimmmmmm mmmhhh")
perso1.identity()

perso2.scream("Tais-toi bitch")
perso2.bite(perso1)

// Urukai.kill(perso2)
perso2.identity()

// Chef.identity()
// Chef.giveOrder(Urukai, " Arrete de tuer tout le monde !!!!")
