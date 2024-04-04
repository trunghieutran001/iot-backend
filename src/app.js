require('dotenv').config()
const express = require('express'); // Import thư viện Express
const morgan = require('morgan')
const indexRouter = require('./routes/index') // Import den file web routes
const settingRouter = require('./routes/setting')
const mysql = require('mysql2');

const app = express(); // Tạo một ứng dụng Express
const path = require('path');
const { table } = require('console');
const port = 3000; // Port

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static files
app.use(express.static(path.join(__dirname, 'public')));

//config morgan
app.use(morgan('combined'));

// Khai bao router
app.use('/', indexRouter);
app.use('/setting', settingRouter);

// test connection
// create the connection to database
// Creating database connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'appdb'
});

// Testing connection and performing a simple query
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    console.log('Connected to database');

    connection.query('SELECT * FROM employees', function(err, results, fields) {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log(">>> results=", results);
        console.log(">>> fields=", fields);
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})