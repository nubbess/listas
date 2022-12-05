//.sort - modifica el array (cuando lo volvamos a llamar estará modificado)
const array = [2, 13, 23, 42, 55, 222];


// es obligatorio que retorne un valor numerico (positivo negativo ó 0)

// si pasa negativo a es menor que b

// array.sort(() => {})

const nuevoArray = array.sort((a,b) => {
  return b - a 
})

console.log(array);

// se pueden ordenar las cosas en función de valores dentro de un parámetro de una lista de objetos

const personas = [
  {nombre: "julian", edad: 23},
  {nombre: "paula", edad: 25},
  {nombre: "manucho", edad: 19},
  {nombre: "maria", edad: 28}
];

const edadOrdenada = personas.sort((a, b) => {
  return a.edad - b.edad
})

console.log(edadOrdenada)



