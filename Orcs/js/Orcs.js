
let strength = 100;
let speakTouched = 
[
  "Almost done",
  "Ouch i've been touched",
  "you got me ",
  "thats' dare bitch",
  "nothing"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Creature 
{
  constructor(nameCreature)
  {
    this.nameCreature = "<strong>" + nameCreature +"</strong>"
    // this.age = age
    this.strength = strength
  }

  saySomething(word)
  {
    return document.write("<br>" + word)
  }
  identity()
  { 
   let texte = ''
    if(this.strength > 0){
      texte = 
        "Je m'appelle " + this.nameCreature +
        "<br> J'ai " + this.age + " ans " +
          "<br> Ma force est de " + this.strength + " points !!:)";
    } 
      
    texte = this.nameCreature + " est mort sa force est de " + this.strength     

    return document.write("<br>" +  texte );
  }
  setStrength(attack)
  {
    this.strength = strength - btn_attack;
  }
  getStrength()
  {
    return this.strength;
  }

  been_attack(force)
  {
    this.strength -= force;
    if (this.strength > 0){
      console.log(true)
      return true
    }
    return false

  }

  attack(adversaire)
  {
    if (!(adversaire instanceof Creature)) {
      throw new Error("<br>" + "Ceci n'est pas un personnage")
    }

    let life_adversaire = adversaire.been_attack(10);
    
    if (life_adversaire == true){
      return true;
    }
    return false;
  }

  sayOuch()
  {
    if (this.strength > 10){
      let numberSpeak = Math.floor(Math.random() * (speakTouched.length-1));
      return speakTouched[numberSpeak]
    }
    return speakTouched[0]
  }

}

/***************************
 * Classe "Orque"
****************************/

class Orc extends Creature
{
  constructor(nameCreature)
  {
    super(nameCreature)
    this.type = "Orc"
    // this.force = 15
    this.strength = strength 
  }

  scream(word)
  {
    document.write("<br>" + this.nameCreature + ' : ' + word.toUpperCase() + " !!! ")
  }

  identity()
  {

    if (this.strength > 0){
      return document.write("<br>" + this.nameCreature + ": Je suis un " + this.type) + super.identity()
    } 
      return super.identity()
    
  }
  


}

class Urukhai extends Orc{
  constructor(nameCreature)
  {
    strength = strength + 10
    super(nameCreature)
  }

  kill(perso)
  {
    perso.strength = 0
    document.write("<br>" + this.nameCreature + " a tué " + perso.nameCreature)
  }
}

class ChieffOrc extends Orc
{
  constructor(nameCreature)
  {
    strength = strength + 20
    // this.force = 30
    super(nameCreature)
    this.type = "Chef Orc"
  }

  giveOrder(perso, ordre)
  {
    document.write("<br>" + this.nameCreature + " donne un ordre à " + perso.nameCreature + ordre.toUpperCase())
  }

  identity()
  {

    if (this.strength > 0){
      return document.write("<br>" + this.nameCreature + ": Je suis un " + this.type) + super.identity()
    } 
      return super.identity()
    
  }

}




