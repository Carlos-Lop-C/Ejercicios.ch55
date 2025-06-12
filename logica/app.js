//Ej1

const username = prompt("Hola, ingresa tu nombre de usuario porfavor.");
const age = prompt("Ahora ingresa tu edad.")
const favoriteMovies = []
let counter = 0
//vamos a pedir 5 peliculas
for (let i = 1; i <= 5; i++) {
    //Los strings dentro de backticks se conocen como string literal y permiten concatenar variables y texto
    favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}`));
    //Equivalente a "Ingresa la pelicula" + i + ":"

}
console.log(`Hola!, soy ${username}, tengo ${age} y mis peliculas favoritas son: `);

while (counter < favoriteMovies.length) {
    console.log(`Mi pelicula favorita numero ${counter + 1} es: ${favoriteMovies[counter]}`);
    counter++
}