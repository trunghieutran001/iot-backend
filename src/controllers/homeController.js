const connection = require('../config/database');
const {getAllEmployees} = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    console.log(">>> check rows: ");
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
const getUpdate = async (req, res) => {
    const employeeID = req.params.id;
    console.log(">>> req.params: ",req.params, employeeID);
    res.render('update.ejs');
}

const postCreate = async (req,res) =>{
    let first_name = req.body.fname;
    let last_name = req.body.lname;
    let email = req.body.email;
// let {id, first_name, last_name, email} = req.body


    console.log(">>> first_name= ", first_name, ">>> last_name= ",last_name, ">>> email= ",email ) // check data   
    let [results, fields] = await connection.promise().query(
        `INSERT INTO employees (first_name, last_name, email) VALUES(?, ?, ?)`,[first_name, last_name, email]
        );

        console.log('>>> Check result: ', results);
        res.send('Created employees succeed!');
}


module.exports = {getHomepage, getCreate, getUpdate, postCreate};