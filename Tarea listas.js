// punto 1

const lista = ["atún", "ricotta", "yerba", "galletas", "soda", "pan"];

// punto 2

lista.push("Aceite de girasol");

console.log(lista);

// punto 3

lista.pop();

console.log(lista);

// punto 4

const peliculas = [
  {pelicula: "El Graduado", director: "Mike Nichols", año: 1968},
  {pelicula: "Bonnie y Clyde", director: "Arthur Penn", año: 1967},
  {pelicula: "Rosemary's Baby", director: "Roman Polanski", año: 1968},
  {pelicula: "Django Unchained", director: "Quentin Tarantino", año: 2013},
  {pelicula: "Gravity", director: "Alfonso Cuarón", año: 2013},

];

// punto 5

const post2010 = peliculas.filter(fecha => fecha.año > 2010); 

console.log(post2010);

// punto 6

const directores = peliculas.map((nombre) => nombre.director);

console.log(directores);

// punto 7

const titulos = peliculas.map((titulos) => titulos.pelicula);
console.log(titulos);

// punto 8  

const pelDir = directores.concat(titulos);

console.log(pelDir);

// punto 9 

const pelYDir = [...directores, ...titulos];

console.log(pelYDir)
