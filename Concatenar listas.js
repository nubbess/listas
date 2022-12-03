// concatenar listas

const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

const lista3 = lista1.concat(lista2);

console.log(lista3);

console.log(lista1);

// no modifica, como los métodos anteriores, los valores de las listas

// cómo unir dos listas con el factor de propagación

console.log(...lista3);

const lista4 = [...lista1, ...lista2];

// ERROR! MAL ENTENDIDO EL CONCEPTO DE FACTOR RE PROPAGACIÓN

const lista5 = [lista1, lista2]
console.log(lista5)

// NOS DA DOS LISTAS