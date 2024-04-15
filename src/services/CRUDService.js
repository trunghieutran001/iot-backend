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

const updateEmployeeById = async(first_name, last_name, email, employeeId) =>{
    let [results, fields] = await connection.promise().query(
        `
        UPDATE employees
        SET first_name = ?, last_name = ?, email = ?
        WHERE employee_id = ?
        `,[first_name, last_name, email, employeeId]
        );
}
const createEmployee = async(first_name, last_name, email,) =>{
    let [results, fields] = await connection.promise().query(
    `INSERT INTO employees (first_name, last_name, email) VALUES(?, ?, ?)`,[first_name, last_name, email]
    );
}
module.exports = {
    getAllEmployees, getEmployeeById, updateEmployeeById, createEmployee
}