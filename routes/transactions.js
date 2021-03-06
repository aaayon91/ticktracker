const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../controllers/transactions.js');

router.post('/tickers/:id/transactions', transactionsCtrl.create);
router.get('/transactions/:id/edit', transactionsCtrl.edit);
router.put('/transactions/:id', transactionsCtrl.update)

module.exports = router;