// Ejercicio 8: 
// Crea un objeto con información sobre una película, incluyendo título, género y año de estreno. Utiliza el destructuring para extraer esta información en variables separadas.


const movieInfo = {
  title: "The Godfather",
  genre: "Crime",
  year: 1972
}

const { title, genre, year } = movieInfo;

console.log(title, genre, year);