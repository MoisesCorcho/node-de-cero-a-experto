const { v4: uuidv4 } = require('uuid');

class Tarea {
    //El constructor es lo que se va a ejecutar cuando creemos una nueva instancia
    //de nuestras tareas
    constructor( desc ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}

module.exports = Tarea;
