// Ejercicio 10:  
// Crea una función que tome un número como parámetro y simule un error si el número es negativo. Utiliza try-catch para manejar el error e imprimir un mensaje de error por consola.

const checkIfNegative = number =>{
  try{
    if(number < 0){
      throw new Error("The number is negative");
    }
  }catch(error){
    console.log(error.message);
  }
}

checkIfNegative(-1);