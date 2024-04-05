const express = require('express');
const router = express.Router();
const {getHomepage,getCreate,getAbout,postCreateUser} = require('../controllers/homeController')

//Router.Method('/route', handler) [GET] /homepage
router.get('/', getHomepage);

// add router qrcode
router.get('/create', getCreate);

// add router about
router.get('/about', getAbout);

router.post('/create-user', postCreateUser);
module.exports = router; //exprot defaults