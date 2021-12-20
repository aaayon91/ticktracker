const express = require('express');
const router = express.Router();
const tickersCtrl = require('../controllers/tickers');
// const main = require('../public/javascripts/main');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, tickersCtrl.index);
router.get('/new', isLoggedIn, tickersCtrl.new);
router.post('/', isLoggedIn, tickersCtrl.create);
router.get('/:id', isLoggedIn, tickersCtrl.show);

module.exports = router;