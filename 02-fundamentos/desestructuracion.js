//Esto es un objeto literal, buscalo.
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log( nombre, apellido, poder ); 

// const {nombre, apellido, poder} = deadpool;

// console.log( nombre, apellido, poder, edad = 0 ); 

// console.log( deadpool.getNombre() );

//**************************** */

// function imprimeHeroe( heroe ) {
//     const {nombre, apellido, poder, edad = 0} = heroe;
//     console.log(nombre, apellido, poder, edad)
// }

// imprimeHeroe(deadpool);

//*********************************** */

//Desestructuracion de un objeto en los argumentos
function imprimeHeroe({nombre, apellido, poder, edad = 0}) {
    console.log(nombre, apellido, poder, edad)
}

// imprimeHeroe(deadpool); 

const heroes = ['Deadpool', 'Superman', 'Batman'];

//desestructuracion de un array
const [ , ,h3] = heroes; 

console.log(h3)

