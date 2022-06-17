const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base, listar, hasta) => {
        
        let salida = '';
        let consola = '';

        for (let index = 0; index <= hasta; index++) {
            salida += `${base} * ${index} = ${base*index} \n`;
            consola += `${base} ${'*'.green} ${index} ${'='.green} ${base*index} \n`;
        }

        if(listar){
            console.log('=======================================')
            console.log('Tabla del', base)
            console.log('=======================================')

            console.log(consola)
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if(err) throw (console.log('Fallo al crear el archivo.')) 

            return `tabla-${base}.txt`
        });  

}

module.exports = {
    crearArchivo
};