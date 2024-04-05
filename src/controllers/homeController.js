const connection = require('../config/database');


const getHomepage = (req, res) => {
    res.render('index.ejs');    
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
        });
    });
    
}
const getAbout = (req, res) => {
    res.send('trunghieutran');
}

const postCreateUser = (req,res) =>{
    
    let first_name = req.body.fname;
    let last_name = req.body.lname;
    let email = req.body.email;

    console.log(">>> first_name= ", first_name, ">>> last_name= ",last_name, ">>> email= ",email ) // check data
    // let {id, first_name, last_name, email} = req.body
    connection.query(
    `INSERT INTO 
    employees (first_name, last_name, email) 
    VALUES(?, ?, ?)`,
    [first_name, last_name, email],
    function(err, results){
        console.log(results);
        res.send('Created user succeed !');
    });
}


module.exports = {getHomepage, getCreate, getAbout, postCreateUser};