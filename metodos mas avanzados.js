// trabajar con metodos mas avanzados
// .map() .filter() .reduce()

let array = ["bahia blanca", "tres arroyos", "punta alta", "coronel suarez", "tornquist"];

array.forEach(value => {
    console.log(value)
});

// .map(valor, índice)

const newArray = array.map((valor, indice) => {
    return `${indice + 1} - ${valor}` 
});

console.log(newArray);

// Como la función es sencilla se puede hacer sin llaves y sin return

const newArray2 = array.map((valor, indice) =>`${indice + 1} - ${valor}`);


console.log(newArray2);

/*

METODO FILTER

*/

// LISTA DE OBJETOS

const personas = [
    {nombre: "julian", edad: 23},
    {nombre: "paula", edad: 25},
    {nombre: "manucho", edad: 19},
    {nombre: "maria", edad: 28}
];

// let personasmas25 = personas.filter(per => {
//     if (per.edad >= 6){
//         return true
//     } else {
//         return false
//     }
// });

let personasmas25 = personas.filter (per => per.edad > 20);

console.log(personasmas25);


/* 
.reduce()
*/ 

const numeros = ["hola", "soy", "julian", "martinez", "sanger"];

const suma = numeros.reduce((acumulado, current, index, arrayOriginal) => {
    console.log(acumulado)
    console.log(current)
    console.log(index)
    console.log(arrayOriginal)
    return acumulado + current
})

console.log(suma)

