const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    price: {
        type: Number,
        min: 0
    },
    shares: {
        type: Number,
        min: 0
    },
    order: {
        type: String,
        default: "buy"
    },
    date: Date
})

const tickerSchema = new Schema({
    symbol: {
        type: String,
        required: true
    },
    company: String,
    transactions: [transactionSchema]
})

module.exports = mongoose.model('Ticker', tickerSchema)