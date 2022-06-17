const fs = require('fs')

const crearArchivo = (base, listar, hasta) => {

    console.log('=======================================')
    console.log('Tabla del', base)
    console.log('=======================================')

    return new Promise((resolve, reject) => {
        
        let salida = '';

        for (let index = 0; index <= 10; index++) {
            salida += `${base} * ${index} = ${base*index} \n`;
        }

        console.log(salida)

        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) reject(console.log('Fallo al crear el archivo.')) 

            resolve(`tabla-${base}.txt`)
        });

        
    });

}

module.exports = {
    crearArchivo
};