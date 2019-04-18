const BudgetItem = require('./../models/BudgetItem');
const PayFrequencies = require('./../models/PaymentFrequency');
const payDateUtil = require('./../util/payDateUtility');


async function getBudgetItems() {
    let budgetItems = [];
    try {
        budgetItems = await BudgetItem.find({});
        budgetItems.forEach(e => {
            e.nextPayDate = payDateUtil.calculateNextPayDate(e.nextPayDate, e.payFrequency);
        });
        return budgetItems;
    } catch(err) {
        console.error(err);
        return err;
    }
}

async function getPayFrequencies() {
    let frequencies = [];
    try {
        frequencies = await PayFrequencies.find({});
        return frequencies;
    } catch(err) {
        console.error(err);
        return err;
    }
}

async function addExampleItem() {
    let item = {
        title: "Car",
        nextPayDate: new Date(),
        payFrequency: "Monthly",
        amount: 224.80
    }
    
    let budgetItem = new BudgetItem(item);

    try {
        BudgetItem.create(budgetItem)
        .then(result => {
            return {error: false, data: budgetItem};
        })
        .catch(error => {
            console.error(error);
        });
        
    } catch(err) {
        return {error: true, data: null, message: err};
    }
    
}

module.exports = {
    getBudgetItems: getBudgetItems,
    addExampleItem: addExampleItem,
    getPayFrequencies: getPayFrequencies
}