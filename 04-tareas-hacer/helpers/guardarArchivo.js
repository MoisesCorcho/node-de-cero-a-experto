const fs = require('fs');

const archivo = './db/data.json'

const guardarDB = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data));

}

const leerDb = () => {

    //En caso de que el archivo no exista no hacemos nada y retornamos null
    if( !fs.existsSync(archivo) ){
        return null;
    }

    const info = fs.readFileSync( archivo, {encoding: 'utf-8'} );
    const data = JSON.parse( info ); //deserialización, es la reconstruccion del objeto a partir de la data que obtengamos 

    console.log(data);

    //Retornamos un array
    return data;

}

module.exports = {
    guardarDB,
    leerDb
}