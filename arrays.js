// Creamos y cargamos vectores, vacios o con una capacidad determinada.

var vector = []; // para cargar después
var vector2= [4]; // vector de 5 posiciones, recordar que vel indice arranca en 0.

console.log(vector.length);
vector[1] = "Osher"; // Cargamos el indice 1 (sería la segunda posición).

console.log(vector[1]);
console.log(vector.length);
console.log(vector);


// Recordar qué con el parametro .length sabremos la capacidad de nuestro vector.

var vector2 = ["Lilo", "Hannah", "Raul", "Molly"];
console.log(vector2);
console.log(vector2.length);

// Agrega un elemento al final del vector.
console.log(vector2.push("Horus"));
console.log(vector2);
console.log(vector2.length);

// Elimina el ultimo elemento del vector.
console.log(vector2.pop());
console.log(vector2);

//  Agrega un elemento al principio del vector.
console.log(vector2.unshift("Coquito"));
console.log(vector2);



