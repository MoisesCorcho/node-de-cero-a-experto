const fs = require('fs');

const axios = require('axios');
const InputPrompt = require('inquirer/lib/prompts/input');

class Busquedas {
    
    historial = []
    dbPath = './db/database.json'

    constructor() {
        this.leerDB();
    }

    get historialCapitalizado() {
        return this.historial.map(lugar => (
            lugar.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
        ));
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'lang': 'es',
            'units': 'metric'
        }
    }

    async ciudad( lugar = '' ) {

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: {
                    
                }
            });

            // const response = await instance.get(); //Asi estaba en el curso, pero no funcionaba
            //Inyectamos el objeto de parametros en la instancia de axios (Como solucion a que no funcionó lo de arriba)
            const response = await instance.get('', { params: this.paramsMapbox });

            //retornar los lugares que coincidan con el lugar que recibimos
            return response.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                longitud: lugar.center[0],
                latitud: lugar.center[1],
            }));

        } catch (error) {
            return [];
        }
        
    }

    async climaLugar( lat, lon ) {

        try {
            
            //Creamos instancia instance axios.create
            const instance = axios.create({
               baseURL: 'https://api.openweathermap.org/data/2.5/weather',
               params: this.paramsOpenWeather
            });
            //Extraemos la informacion de la data  response

            const objParam = this.paramsOpenWeather
            objParam.lat = lat;
            objParam.lon = lon;

            const response = await instance.get('', {params: objParam})

            return {
                desc: response.data.weather[0].description,
                temp: response.data.main.temp,
                min: response.data.main.temp_min,
                max: response.data.main.temp_max
            }

        } catch (error) {
            console.log('error: ', error);  
        }

    }

    agregarHistorial( lugar = '' ) {

        if(this.historial.includes( lugar.toLocaleLowerCase() )){
            return;
        }

        this.historial = this.historial.splice(0,5);

        this.historial.unshift( lugar.toLocaleLowerCase() )

        this.guardarBD();
    }

    guardarBD() {
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB() {
        if(!fs.existsSync(this.dbPath)) return;

        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse( info ); //deserializacion :: Es la reconstruccion del objeto a partir de la data

        this.historial = data.historial;
    }

}

module.exports = Busquedas;