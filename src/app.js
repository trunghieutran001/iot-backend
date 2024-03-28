require('dotenv').config()
const express = require('express'); // Import thư viện Express
const morgan = require('morgan')
const indexRouter = require('./routes/index') // Import den file web routes
const indexSetting = require('./routes/setting')
const indexContact = require('./routes')
const app = express(); // Tạo một ứng dụng Express
const path = require('path');
const port = process.env.PORT || 3000; // Port
const hostname = 'localhost';

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static files
app.use(express.static(path.join(__dirname, 'public')));

//config morgan
app.use(morgan('combined'));

// Khai bao router
app.use('/', indexRouter);
app.use('/setting', indexSetting);


app.listen(port, process.env.HOST_NAME, () => {
    console.log(`Example app listening on port ${port}`);
})