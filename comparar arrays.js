// como podemos comparar listas

// .every()

const array = [2, 1, 4, 45, 64, 55, -3, -13, -23, -15, -45];

const esNumero = array.every(valor => typeof valor === "number");

console.log(esNumero);

const sonTodosPosit = array.every (valor => valor >= 0);

console.log(sonTodosPosit);

// comparar dos array

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

const comparar = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const res = arr1.every((valor, i) => valor === arr2[i]);
  return res
}

console.log(comparar(ar1, ar2))

