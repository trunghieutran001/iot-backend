const express = require('express');
const router = express.Router();
const getSetting = require('../controllers/setting')

router.get('/',getSetting);

module.exports = router;