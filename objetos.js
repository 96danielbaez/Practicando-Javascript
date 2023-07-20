/* OBJETOS = {CLAVE: VALOR,
              CLAVE: VALOR,
    };
*/

var deportes = {
  ConBalon: ["Football", "Basketball", "Rugby"], // VECTORES
  SinBalon: ["Boxeo", "Surf", "Trekking"], // VECTORES
};

console.log(deportes.ConBalon);
console.log(deportes.SinBalon);

var persona = {
  nombre: "Lucas",
  edad: 26,
  estudio: { esProgramador: true },
};

console.log(persona.edad);

/////////////////////////

var comidas = {}; // Creamos un objeto vacio.

var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas.propUno = ["Frutas", "Vegetales"]; // Retorna el nombre de la variable
  comidas[propDos] = ["Hamburguesa", "Papas fritas"]; // Retorna el nombre que mandamos a la función.
};

diferenciaDeNotaciones("saludable", "nosaludable");
console.log(comidas);

// BUSCAR SI ESTÁN ESAS PROPIEDADES EN ESE OBJETO, devuelve un valor booleano.


var mascotas = {
  gato: ["Molly", "Raul", "Hannah"],
  perro: ["Osher", "Theo", "Billy"],
};

console.log(mascotas.hasOwnProperty("gato"));
console.log(mascotas.hasOwnProperty("perro"));
console.log(mascotas.hasOwnProperty("hamster"));

console.log(Object.keys(mascotas)); // Devuelve


