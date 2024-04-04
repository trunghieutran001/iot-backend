const express = require('express');
const router = express.Router();
const {getHomepage,getContact,getAbout,postCreateUser} = require('../controllers/homeController')

//Router.Method('/route', handler) [GET] /homepage
router.get('/', getHomepage);

// add router qrcode
router.get('/contact', getContact);

// add router about
router.get('/about', getAbout);

router.post('/create-user', postCreateUser);
module.exports = router; //exprot defaults