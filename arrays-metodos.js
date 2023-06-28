
// MÉTODO split()(STRING A VECTOR), pop(), push(), join().

nombre = "Pedrx";
separar = nombre.split(""); // Transforma string a vector

console.log(nombre);
console.log(separar);

console.log(separar.pop());
console.log(separar);

console.log(separar.push("o"));

console.log(separar);

nombre = separar.join("");
console.log(nombre);

// MÉTODO split(), unshift(), shift(), join().

console.log(nombre);
separar = nombre.split("");

console.log(separar);
console.log(separar.shift());

console.log(separar);
console.log(separar.unshift("C"));
console.log(separar);

nombre = separar.join("");
console.log(nombre);

// METODO includes(), every().

// Recorre el vector y compara si incluye el string "d", y devuelve un valor booleano //

console.log(separar);
console.log(separar.includes("d"));

// Recorrer el vector y compara si todas las posiciones contienen el string "d" y devuelve un valor booleano //

console.log(separar);
