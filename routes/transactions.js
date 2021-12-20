const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../controllers/transactions.js');

router.post('/tickers/:id/transactions', transactionsCtrl.create);

module.exports = router;