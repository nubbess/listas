// Iterar los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined];


// forma poco eficiente (antigua)

for (let index = 0; index < array.length; index++) {
  console.log(array[index])  
}

// metodo .forEach (forma ECMAScript 6)

let suma = 0;
const arrayNums = [2, 4, 66, 77, 392, 5]
arrayNums.forEach(valor => {
  valor + valor;
  console.log(valor);
});
console.log(suma);

// busqueda de un valor dentro de una lista .find (funcion callback)

const variable = arrayNums.find(value => {
  if(value === 77){
    return(true);
  }
});
console.log(variable);

// para objetos

const personas = [
  {nombre: "julian", edad: 23},
  {nombre: "paula", edad: 25},
  {nombre: "manucho", edad: 19},
  {nombre: "maria", edad: 28}
];

 const objeto = personas.find(o => {
   if (o.nombre === "paula"){
     return true;
   }
 });


console.log(objeto.edad);

// mas ejemplos para practicar 

let alumnos = [
  {alumno:"Julian Martinez" , nota: Number(8.5) },
  {alumno:"Manuel Martinez" , nota: Number(8.3)},
  {alumno:"Paula Acciarri", nota: Number(9)},
];

const mejorNota = Math.max(...alumnos.map(o => o.nota))
console.log(mejorNota);

const mejorPromedio = alumnos.find(n => Math.max(n.nota));

console.log(mejorPromedio.alumno);

console.log(...array);



// forma MUY eficiente para buscar cosas dentro:

const amigos = [
  {amigo: "tomas", edad: 23},
  {amigo: "santiago", edad: 24},
  {amigo: "franco", edad: 25},
];

let amigoYEdad = amigos.find(e => e.edad === 23);
console.log(amigoYEdad.edad);

// para buscar algo que sabemos que está en un objeto (best way to look)

const amigos2 = [
  {amigo: "tomas", edad: 23},
  {amigo: "santiago", edad: 24},
  {amigo: "franco", edad: 25},
];


const { edad } = amigos2.find(a => a.amigo === "tomas");
console.log(edad);