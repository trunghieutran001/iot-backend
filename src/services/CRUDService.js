const connection = require("../config/database");

const getAllEmployees = async () => {
    let [result, fields] = await connection.promise().query('SELECT * FROM employees');
    return result;
}
module.exports = {
    getAllEmployees,
}