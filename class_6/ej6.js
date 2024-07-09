// Ejercicio 6:
// Crea una función que tome un array de números como parámetro y devuelva la suma de todos ellos. Utiliza el método reduce para implementar la función.

const numbers = [1, 2, 3, 4, 5];
const sumArr = numbers.reduce((acc, number) => acc + number, 0);

console.log(sumArr);