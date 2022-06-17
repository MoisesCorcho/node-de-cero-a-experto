const Tarea = require('./tarea')
const colors = require('colors/safe')

class Tareas {
    //Usualmente esto no se coloca, las propiedades en js se definen dentro del constructor
    _listado = {}

    //Hacemos convertimos el pbjeto en array para que se vea mejor en pantalla al imprimirlo.
    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id = '' ){

        if(this._listado[id]){
            delete this._listado[id];
        }
        
    }

    crearTarea( desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas = [] ){
        
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
        
    }

    listadoCompleto(){
        console.log('\n')
        let cont = 1;

        this.listadoArr.forEach(tarea => {
            if(tarea.completadoEn === null){
                console.log(`${colors.green(cont)}. ${tarea.desc} :: ${'Pendiente'.red}`);
            }else{
                console.log(`${colors.green(cont)}. ${tarea.desc} :: ${'Completada'.green}`);
            }
            
            cont += 1;
        })
    }

    listarPendientesCompletadas( completadas = true ){
        console.log('\n');
        let contador = 0;

        this.listadoArr.forEach(tarea => {
            if(completadas === true){
                if(tarea.completadoEn !== null){
                    contador += 1;
                    console.log(`${colors.green(contador)}. ${tarea.desc} :: ${colors.green(tarea.completadoEn)}`);
                }
            }else{
                if(tarea.completadoEn === null){
                    contador += 1;
                    console.log(`${colors.green(contador)}. ${tarea.desc} :: ${'Pendiente'.red}`);                    
                }
            }            
            
            
        })
    }

    toggleCompletadas( ids = [] ){

        ids.forEach(id => {

            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completadoEn = null;
            }

        });

    }
}


module.exports = Tareas;