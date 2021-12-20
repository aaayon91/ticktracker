const Ticker = require('../models/ticker');
// const main = require('../public/javascripts/main');

// const ticker = require("../models/ticker")

module.exports = {
    new: newTicker,
    create,
    index,
    show
}

function newTicker(req, res) {
    hover();
    res.render('tickers/new', {title: 'ADD TICKER'})
}

function create(req, res) {
    const ticker = new Ticker(req.body);
    ticker.save(function(err) {
        if (err) return res.redirect('/tickers/new');
        console.log(ticker);
        // res.redirect('/tickers')
        res.redirect(`/tickers/${ticker._id}`);
    });
}

function index(req, res) {
    Ticker.find({}, function(err, tickers) {
        res.render('tickers/index', {
            title: 'MY TICKERS',
            tickers
        })
    })
}

function show(req, res) {
    Ticker.findById(req.params.id, function(err, ticker) {
        // console.log(ticker._id)
        res.render('tickers/show', {
            title: ticker.company,
            ticker
        });
    })
}

function hover() {
    console.log('hi')
}