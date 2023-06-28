
// RECORRER VECTOR USANDO UN FOR E ITERACIÓN CON .LENGHT

var vecNumero = [1, 2, 3, 4, 5]; // Creamos un vector con números hasta el 5.

// Haciendo length al vector para determinar la capacidad.

for (i = 0; i < vecNumero.length; i++) {
  console.log(vecNumero[i]);
}

// RECORRER VECTOR CON WHILE

var vecPalabra = []; // Crear vector vacio

while (vecPalabra.length<5){ // Mientras que el vector sea menor que 5.
    vecPalabra.push("Molly"); // Ingresa "Molly", en la última posición.
}

console.log(vecPalabra);
