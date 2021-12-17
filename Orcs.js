class Creature 
{
  constructor(nameCreature, age, strength)
  {
    this.nameCreature = "<mark><strong>" + nameCreature +"</strong></mark>"
    this.age = age
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
  constructor(nameCreature, age, strength)
  {
    super(nameCreature, age, strength)
    this.type = "Orc"
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
  constructor(nameCreature, strength)
  {
    strength = strength + 10
    super(nameCreature, strength)
  }

  kill(perso)
  {
    perso.strength = 0
    document.write("<br>" + this.nameCreature + " a tué " + perso.nameCreature)
  }
}

class ChieffOrc extends Orc
{
  constructor(nameCreature, age, strength)
  {
    strength = strength + 2
    super(nameCreature, age, strength)
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

let perso1 = new Creature("Jean", 24, 57)
let Orc1 = new Orc("Orka", 15, 100)
let Orc2 = new Orc("Robio", 25, 150)
let Urukai = new Urukhai("Uru", 80)
let Chef = new ChieffOrc("Chief", 80, 250)
 
Orc1.scream("Fuuuuucccckkkkk")
Orc1.scream("Je suis fatigué et j'ai faimmmmmm mmmhhh")
Orc1.identity()

Orc2.scream("Tais-toi bitch")
Orc2.bite(Orc1)

Urukai.kill(Orc2)
Orc2.identity()

Chef.identity()
Chef.giveOrder(Urukai, " Arrete de tuer tout le monde !!!!")



