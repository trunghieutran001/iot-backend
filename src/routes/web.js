const express = require('express');
const { getHomepage, getQrCode } = require('../controllers/homeController')
const router = express.Router()

//Router.Method('/route', handler)
router.get('/', getHomepage);
// Them router
router.get('/qrcode', getQrCode);
module.exports = router; //exprot default