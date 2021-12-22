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
    console.log(transaction);
    // ticker.save().then(function() {
        // res.redirect(`/tickers/${ticker._id}`);
    // }).catch(function(err) {
        // return next(err);
    // });
    res.render(`transactions/edit`, {
        title: 'EDIT TRANSACTION',
        transaction
      })
});

}

function update(req, res) {

    Ticker.findOne({'transactions._id': req.params.id}).then(function(ticker) {
        const transaction = ticker.transactions.id(req.params.id);
        console.log('HELOOOOOOO');
        transaction.price = req.body.price;
        transaction.shares = req.body.shares;
        transaction.order = req.body.order;
        console.log(transaction);
        // console.log(transaction.price)
        // console.log(req.body.shares)
        ticker.save().then(function() {
            res.redirect(`/tickers/${ticker._id}`);
        }).catch(function(err) {
            return next(err);
        });
        // res.redirect(`/tickers/${ticker._id}`);
    });

    // ticker.save(function(err) {
    //     if (err) return res.redirect('/tickers/new');
    //     // console.log(ticker);
    //     // res.redirect('/tickers')
        // res.redirect(`/tickers/${ticker._id}`);
    // });
}

