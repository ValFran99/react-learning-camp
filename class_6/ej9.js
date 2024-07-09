// Ejercicio 9:
// Crea una función que tome un objeto como parámetro y devuelva una cadena con información legible sobre la película. Utiliza templates de strings y destructuring para obtener los valores del objeto.

const movieInfo = {
  title: "The Godfather",
  genre: "Crime",
  year: 1972
}


const movieInfoString = movie => {
  const { title, genre, year } = movie;
  return `The movie '${title}' is a ${genre} movie released in ${year}.`
}

console.log(movieInfoString(movieInfo));