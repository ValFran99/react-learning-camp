// Ejercicio 11:
// Combina todos los conceptos aprendidos en los ejercicios anteriores para crear una pequeña aplicación que permita al usuario ingresar su nombre y edad en un formulario. Al enviar el formulario, la aplicación debe mostrar un mensaje de bienvenida con el nombre y edad ingresados.

const form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = event.target[0].value;
  const age = event.target[1].value;

  if(age < 0){
    alert("The age cant be negative");
    return;
  } else if(age === "" || name === ""){
    alert("Please complete the form...");
    return;
  }

  alert(`Hello ${name}, you are ${age} years old`);

});