const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PaymentFrequencySchema = new Schema({
    text: {
        type: String,
        required: true
    },
    paymentsPerYear: {
        type: Number,
        required: true
    }
});

const PaymentFrequency = mongoose.model('PaymentFrequency', PaymentFrequencySchema);
module.exports = PaymentFrequency;