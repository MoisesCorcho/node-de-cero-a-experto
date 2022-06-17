const {crearArchivo} = require('./helpers/multiplicar-async-await');
const argv = require('./config/yargs');

console.clear()

console.log(process.argv)
console.log(argv)

console.log('base yargs: ', argv.base);

const {base, listar, hasta} = argv;

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err))
