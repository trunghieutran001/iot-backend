const express = require('express');
const router = express.Router();
const {getHomepage,getCreate,getUpdate,postCreate} = require('../controllers/homeController')

//Router.Method('/route', handler) [GET] /homepage
router.get('/', getHomepage);

// add router qrcode
router.get('/create', getCreate);

// add router about
router.get('/update/:id', getUpdate);

router.post('/create-user', postCreate);
module.exports = router; //exprot defaults