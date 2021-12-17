
class Calculette 
{
  constructor(nombre1, nombre2){
    this.nombre1 = nombre1;

    this.nombre2 = nombre2;
  }

  // setNombre1(nombre){
  //   while (isNan(nombre)){
  //     window.prompt("Entrez un nombre 1")
  //   }
  // }

  // getNombre1()
  // {
  //   return this.nombre1 = nombre1
  // }
  
  // setNombre2(nombre){
  //   while (isNan(nombre)){
  //     this.nombre1 = window.prompt("Entrez un nombre 2")
  //   }
  // }


  additionner()
  {
    let result = this.nombre1 + this.nombre2
    return result;
  }
  soustraire()
  {
    let result = this.nombre1 - this.nombre2
    return result;
  }
  multiplier()
  {
    let result = this.nombre1 * this.nombre2
    return result;
  }
  diviser()
  {
    let result = this.nombre1 / this.nombre2
    return result;
  }
  modulo()
  {
    let result = this.nombre1 % this.nombre2
    return result;
  }
}

// Travail
// let calc = new Calculette(nombre1, nombre2);

let nombre1 = window.prompt("Entrez un nombre 1")
let nombre2 = window.prompt("Entrez un nombre 2")

let calc = new Calculette(nombre1, nombre2);
let addition = "<br>  addition :" + calc.nombre1 + " + " + calc.nombre2 + " = " + calc.additionner();

let multiplication ="<br>  multiplication :" + calc.nombre1 + " x " + calc.nombre2 + " = " + calc.multiplier();

let soustraire = "<br>  soustraction :" + calc.nombre1 + " - " + calc.nombre2 + " = " + calc.soustraire();

let diviser ="<br>  division :" + calc.nombre1 + " / " + calc.nombre2 + " = " + calc.diviser();

let modulo ="<br>  modulo :" + calc.nombre1 + " % " + calc.nombre2 + " = " + calc.modulo();

document.write(addition + multiplication + soustraire + diviser + modulo)