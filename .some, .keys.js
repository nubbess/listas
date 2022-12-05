// .some

const array = [2, 1, 4, 45, 64, 55, -3, -13, -23, -15, -45];

const hay = array.some(valor => valor > -3);

console.log(hay);

// obtener una lista a partir de un objeto iterable

const str = "Hola me llamo manuel";
const strArr = Array.from(str);
console.log(strArr);


const keys = array.keys()
const arkeys = Array.from(keys)

console.log(arkeys)