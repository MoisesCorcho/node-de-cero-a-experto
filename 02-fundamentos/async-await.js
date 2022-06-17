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

const getEmpleado = (id) => {   

    return new Promise((resolve, reject) => {
        const empleado  = empleados.find((e) => id === e.id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`)
        
    });

}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => id === s.id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`Salario con id ${id} no existe`)
    });

}

const id = 4;

const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`
    } catch (error) {
        throw error;
    }
    
}

getInfoUsuario( id )
    .then(msg => console.log(msg))
    .catch(err => console.log(err))