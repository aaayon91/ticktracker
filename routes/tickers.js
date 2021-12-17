const express = require('express');
const router = express.Router();
const tickersCtrl = require('../controllers/tickers');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, tickersCtrl.index)

module.exports = router;