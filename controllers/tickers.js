const res = require('express/lib/response');
const Ticker = require('../models/ticker');
// const main = require('../public/javascripts/main');

// const ticker = require("../models/ticker")

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

function deleteTicker(req, res, next) {
    // console.log('HELLO');
    // Ticker.findOne({'t._id': req.params.id}).then(function(t) {
    Ticker.findOne(req.params.id).then(function(t) {
        console.log(t);
        // const ticker = ticker.id(req.params.id);
        if (!ticker.user.equals(req.user._id)) return res.redirect('/tickers');
        ticker.remove();
        Ticker.save().then(function() {
            res.redirect('/tickers');
        }).catch(function(err) {
            return next(err);
        });
    });
}

// function deleteTicker(req, res) {
//     console.log("Hello")
//     // Ticker.findOne()
//     res.redirect('/tickers');
// }

// function hover() {
//     console.log('hi')
// }