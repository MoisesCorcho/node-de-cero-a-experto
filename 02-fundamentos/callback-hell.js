//tenemos una funcion getEmpleado que recibe un id y un callback, devolver el empleado.

const empleados = [  
    {
        id: 1, 
        nombre: 'Moises'
    },
    {
        id: 2, 
        nombre: 'Pepe'
    },
    {
        id: 3, 
        nombre: 'Don yisus'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = (id, callback) => {
    const empleado  = empleados.find((e) => id === e.id)?.nombre;

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }
    
}


const getSalario = (id, callback) => {
    salario = salarios.find(s => id === s.id)?.salario;

    if(salario){
        callback(null, salario);
    }else{
        callback(`No existe salario con id ${id}`)
    }
}

const id = 3; 

getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('ERROR')
        return console.log(err);
    }  

    getSalario(id, (err, salario) => {
        if(err){
            return console.log(err);
        }
    
        console.log(`El empleado con nombre ${empleado} tiene un salario de ${salario}`);
    });
});
