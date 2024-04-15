const connection = require("../config/database");

const getAllEmployees = async () => {
    let [result, fields] = await connection.promise().query('SELECT * FROM employees');
    return result;
}
const getEmployeeById = async (employeeID) => {
    let [results, fields] = await connection.promise().query('SELECT * FROM employees WHERE employee_id = ?', [employeeID]);
    let employee = results && results.length > 0 ? results[0] : {};

    return employee;
}
module.exports = {
    getAllEmployees, getEmployeeById
}