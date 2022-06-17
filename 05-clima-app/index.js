require('dotenv').config();
const {
    leerInput, 
    inquirerMenu, 
    pausa,
    listarLugares
} = require('./helpers/inquirer');
const Busquedas = require('./models/busqueda');
require('colors')


const main = async() => {

    const busquedas = new Busquedas();
    
    let opt = 0;

    
    do {
        //Obtenemos la opcion del menu que elija el usuario
        opt = await inquirerMenu();
        

        switch (opt) {
            case 1:

                //Obtenemos la ciudad que el usuario haya escrito por consola
                const termino = await leerInput('Ciudad: ');

                //Obtenemos los lugares dentro de un array de objetos
                const lugares = await busquedas.ciudad(termino);

                //Obtenemos el id del lugar que seleccionemos en la consola.
                const id = await listarLugares(lugares);
                if(id === 0) continue;
               
                //Obtenemos el objeto lugar a partir del id que obtuvimos arriba.
                const lugarSel = lugares.find(l => l.id === id);

                
                busquedas.agregarHistorial(lugarSel.nombre)


                //Datos del clima
                const clima = await busquedas.climaLugar(lugarSel.latitud, lugarSel.longitud);

                console.clear()
                //Mostrar resultados

                console.log('\nInformacion de la ciudad\n '.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Latitud: ', lugarSel.latitud);
                console.log('Longitud: ', lugarSel.longitud);
                console.log('Temperatura: ', clima.temp);
                console.log('Minima: ', clima.min);
                console.log('Maxima: ', clima.max);
                console.log('Descripcion del clima: ', clima.desc.green);
            break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i+1}.`.green
                    console.log(`${idx} ${lugar}`);
                });
            break;
        
        }

        if(opt !== 0) await pausa();

    } while (opt !== 0 );
}

main();