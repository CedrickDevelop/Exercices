
let strength = 100;

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
  
  bite(perso)
  {
    if (!(perso instanceof Creature)) {
      throw new Error("<br>" + "Ceci n'est pas un personnage")
    }

    return document.write("<br>" + this.nameCreature + " a mordu " + perso.nameCreature)
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




