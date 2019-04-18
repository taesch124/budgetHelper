const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BudgetItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    nextPayDate: {
        type: Date,
        required: true
    },
    payFrequency: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    incomeFlag: {
        type: Boolean,
        required: true
    }
});

const BudgetItem = mongoose.model('BudgetItem', BudgetItemSchema);
module.exports = BudgetItem;