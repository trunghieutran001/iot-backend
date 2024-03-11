require('dotenv').config()
const express = require('express'); // Import thư viện Express
const webRouter = require('./routes/web') // Import den file web routes
const app = express(); // Tạo một ứng dụng Express
const path = require('path');
const port = process.env.PORT; // Port
const hostname = 'localhost';


// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// config static files
app.use(express.static(path.join(__dirname, 'public')));

// Khai bao router
app.use('/', webRouter);


app.listen(port, process.env.HOST_NAME, () => {
    console.log(`Example app listening on port ${port}`);
})