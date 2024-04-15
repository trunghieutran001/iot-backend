const connection = require('../config/database');
const {getAllEmployees, getEmployeeById, updateEmployeeById, createEmployee, } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let result = await getAllEmployees();
    res.render('index.ejs', {listEmployees: result});
}
const getCreate = (req, res) => {
    let user = [];
    connection.connect(function(err) {
        console.log('Connected to database');
        connection.query('SELECT * FROM employees', function(err, results, fields) {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        user = results;
        res.render('create.ejs');
        console.log('connected query');
        });
    });
    
}

const postCreate = async (req,res) =>{
    let first_name = req.body.fname;
    let last_name = req.body.lname;
    let email = req.body.email;
    await createEmployee(first_name, last_name, email);
    res.redirect('/');
    console.log('Created employees succeed!');
}

const getUpdate = async (req, res) => {
    const employeeID = req.params.id;
    let employee = await getEmployeeById(employeeID);
    res.render('update.ejs', {employeeEdit:employee});
}

const postUpdate = async (req,res) =>{
    let employeeId = req.body.employeeId;
    let first_name = req.body.fname;
    let last_name = req.body.lname;
    let email = req.body.email;
    await updateEmployeeById(first_name, last_name, email, employeeId);
    res.redirect('/');
    console.log('Updated employees succeed!');
}

const postDelete = async (req,res) =>{
    const employeeID = req.params.id;
    let employee = await getEmployeeById(employeeID);
    res.render('delete.ejs', {employeeEdit:employee});
}

const postHandleRemove = (req, res) =>{
    res.send(' ok delete');
}
module.exports = {getHomepage, getCreate, getUpdate, postCreate, createEmployee, getEmployeeById, postUpdate, updateEmployeeById, postDelete, postHandleRemove};