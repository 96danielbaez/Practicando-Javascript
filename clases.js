// CLASES: FUNCIÓN CONSTRUCTORA Y EXPRESIÓN DE CLASE.

// FUNCIÓN CONSTRUCTORA

function Auto(puertas, color, marca, año, ruedas) {
  this.puertas = puertas;
  this.color = color;
  this.marca = marca;
  this.año = año;
  this.ruedas = ruedas;
}

let miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.ruedas);

// EXPRESIÓN DE CLASE

class Auto2 {
    constructor (puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
}

let miSegundoAuto = new Auto2 (2, "Azul", "Lambo", 2018, 2);

console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);

