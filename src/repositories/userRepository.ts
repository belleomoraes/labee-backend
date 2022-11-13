import connection from "../database/db.js";

async function insertNewUserData(name, email, password) {
    const insertData = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`

    return connection.query(insertData, [name, email, password])
}

const userRepository = {
    insertNewUserData
}

export {userRepository}