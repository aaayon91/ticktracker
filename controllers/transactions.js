const Ticker = require('../models/ticker');

module.exports = {
    create,
    edit,
    update
}

function create(req, res) {
    Ticker.findById(req.params.id, function(err, ticker) {
        ticker.transactions.push(req.body)
        ticker.save(function(err) {
            res.redirect(`/tickers/${ticker._id}`)
        })
    })
}

function edit(req, res) {
    Ticker.findOne({'transactions._id': req.params.id}).then(function(ticker) {
        const transaction = ticker.transactions.id(req.params.id);
        res.render(`transactions/edit`, {
        title: 'EDIT TRANSACTION',
        transaction
        })
    });
}

function update(req, res) {

    Ticker.findOne({'transactions._id': req.params.id}).then(function(ticker) {
        const transaction = ticker.transactions.id(req.params.id);
        transaction.price = req.body.price;
        transaction.shares = req.body.shares;
        transaction.order = req.body.order;
        ticker.save().then(function() {
            res.redirect(`/tickers/${ticker._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

