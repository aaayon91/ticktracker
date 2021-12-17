// const Ticker = require('../models/ticker');

module.exports = {
    index
}

function index(req, res) {
    res.render('tickers/index', {
        title: 'Tickers'
    })
}