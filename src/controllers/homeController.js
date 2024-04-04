const connection = require('../config/database');


const getHomepage = (req, res) => {
    let user = [];
    connection.connect(function(err) {

        console.log('Connected to database');

        connection.query('SELECT * FROM employees', function(err, results, fields) {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        user = results;
        console.log(">>> results homepage: ", results);
        });
    });
    res.render('index.ejs');
}
const getContact = (req, res) => {
    res.render('contact.ejs');
}
const getAbout = (req, res) => {
    res.send('trunghieutran');
}

const postCreateUser = (req,res) =>{
    console.log(">>> req.body", req.body) // check data
    res.send('Create a new user');
}

module.exports = {getHomepage, getContact, getAbout, postCreateUser};