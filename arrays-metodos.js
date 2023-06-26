
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