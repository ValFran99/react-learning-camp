// Crear un archivo .js que se encargue de solucionar operaciones matematicas basicas (suma, resta, multiplicacion, division, raiz cuadrada y elevar a potencia n)
// Cada operación debe ser una función (ejemplo function sum(a,b) { blah blah})
// Si se hace una operacion que no se puede (dividir por cero) deben poder atrapar ese error y mostrarlo en consola (recuerden no parar la ejecución de su archivo js capturar el error pero puede continuar operando)
// Subanlo a su github!

function sum(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  // En js no tira error la división por cero, por lo que lo valido antes
  if(b === 0) {
    console.log("No se puede dividir por cero");
    return null;
  }
  return a / b;
}

function raizCuadrada(a) {
  if(a < 0) {
    console.log("No se puede calcular la raíz cuadrada de un número negativo");
    return null;
  }
  return Math.sqrt(a);
}

function elevarAPotencia(a, n) {
  let result = 1;
  for(let i = 0; i < n; i++) {
    result *= a;
  }
  return result;
}