const getUserByID = (id, callback) => {
    const user = {
        id, 
        nombre: 'Moises'
    }

    callback(user);
}

getUserByID(10, (user) => {
    console.log(user);
});