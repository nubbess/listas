// obtener una lista a partir de otra a partir de .slice()

let array = ["hola", 1, 2, 3, true, null, "adios"];

// slice NO MO DIFICA EL VALOR DEL ARRAY ORIGINAL != splice JAJA.

let nuevoArray = array.slice(2, 5)

console.log(nuevoArray)

// con el - en el segundo valor cuenta del último hacia adentro

let nuevoArray2 = array.slice(2, -1)

console.log(nuevoArray2)