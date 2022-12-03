// como trabajar con listas (arrays, vectores)

let array = [1, 2, true, false, "julian"];


// acceder a los valores de un array a traves de su posición
// array[indice] => indice 0, 1, 2, 3 etc. 0 piso

console.log(array[2] );

// introducir nuevos valores a un array

// .push() y .unshift() => mutan el valor del array

// valores al final -> push 

array.push("jejeje");

console.log(array);

// valores al inicio

array.unshift("hola", "juego");

console.log(array);

// para quitar valores del array .pop() y .shift() 

array.pop();

console.log(array);

// valores al inicio

array.shift();

console.log(array);

// metodo para   eliminar modificar o añadir valores en array .splice() (x [que indice], y [cuantos valores], z)

// eliminar con .splice(indice, cantidad a eliminar)

const array2 = [1, 2, 3, 4, 5, 6];

array2.splice(3, 1);

// agregar valors con .splice(indice, 0{no borra nada}, valores)

array2.splice(1, 0, "hola");

console.log(array2);

// modificar valores

array2.splice(0, 1, "valor nuevo");

console.log(array2);
