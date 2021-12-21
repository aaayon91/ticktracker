const Ticker = require('../models/ticker');

module.exports = {
    create,
    edit,
    // update
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
  const transaction = Ticker.transactions.findById(req.params.id);
  console.log(transaction);
    res.render(`transactions/edit`, {title: 'EDIT TRANSACTION'})
}

// function update(req, res) {
//     const transaction = Ticker.transactions.findById(req.params.id);
//     ticker.save(function(err) {
//         if (err) return res.redirect('/tickers/new');
//         // console.log(ticker);
//         // res.redirect('/tickers')
//         res.redirect(`/tickers/${ticker._id}`);
//     });
// }

