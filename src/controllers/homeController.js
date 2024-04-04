const connection = require('../config/database');


const getHomepage = (req, res) => {
    let user = [];
    // Testing connection and performing a simple query
    connection.connect(function(err) {
    // if (err) {
    //     console.error('Error connecting to database:', err);
    //     return;
    // }

        console.log('Connected to database');

        connection.query('SELECT * FROM employees', function(err, results, fields) {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        user = results;
        console.log(">>> results homepage: ", results);

        //console.log(">> check users: ",user)
        //res.send(JSON.stringify(users))
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

module.exports = {getHomepage,getContact,getAbout};