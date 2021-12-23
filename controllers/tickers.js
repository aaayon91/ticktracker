const Ticker = require('../models/ticker');

module.exports = {
    new: newTicker,
    create,
    index,
    show,
    deleteTicker
}

function newTicker(req, res) {
    res.render('tickers/new', {title: 'ADD TICKER'})
}

function create(req, res) {
    const ticker = new Ticker(req.body);
    ticker.save(function(err) {
        if (err) return res.redirect('/tickers/new');
        res.redirect(`/tickers/${ticker._id}`);
    });
}

function index(req, res) {
    Ticker.find({}, function(err, tickers) {
        function compare( a, b ) {
            if ( a.symbol < b.symbol ){
              return -1;
            }
            if ( a.symbol > b.symbol ){
              return 1;
            }
            return 0;
          }
          tickers.sort( compare );
        res.render('tickers/index', {
            title: 'MY TICKERS',
            tickers
        })
    })
}

function show(req, res) {
    Ticker.findById(req.params.id, function(err, ticker) {
        res.render('tickers/show', {
            title: ticker.company,
            ticker
        });
    })
}

function deleteTicker(req, res, next) {
    Ticker.findById(req.params.id).then(function (ticker) {
        ticker.remove();
        res.redirect('/tickers');
    })
}
