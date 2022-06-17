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

const id = 2;

// getEmpleado(id)
// .then(empleado => console.log(empleado))
// .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

//No se deberian resolver las promesas de esta manera
// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log('El señor ',nombre,'tiene un salario de', salario))
    .catch(err => console.log(err))