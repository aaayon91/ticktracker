const Ticker = require('../models/ticker');

module.exports = {
    create
}

function create(req, res) {
    Ticker.findById(req.params.id, function(err, ticker) {
        ticker.transactions.push(req.body)
        ticker.save(function(err) {
            res.redirect(`/tickers/${ticker._id}`)
        })
    })
}