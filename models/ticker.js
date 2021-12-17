const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({
    name: String,
    symbol: String,
    price: Number
})

module.exports = mongoose.model('Ticker', tickerSchema)