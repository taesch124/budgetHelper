const BudgetItem = require('./../models/BudgetItem');
const PayFrequencies = require('./../models/PaymentFrequency');
const payDateUtil = require('./../util/payDateUtility');
const budgetScheduleUtil = require('./../util/budgetScheduleUtility');


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

async function addBudgetItem(itemData) {
    try {
        let budgetItem = new BudgetItem(itemData);

        BudgetItem.create(budgetItem)
        .then(result => {
            return {error: false, data: budgetItem};
        })
        .catch(error => {
            return {error: true, data: null, message: error};
        })
    }
    catch(error) {
        return {error: true, data: null, message: error};
    }
    
}

async function deleteBudgetItem(itemId) {
    try {
        BudgetItem.findByIdAndDelete(itemId)
        .then(result => {
            return {error: false, data: result};
        })
        .catch(err => {
            return {error: true, data: null, message: err};
        })
    } catch(err) {
        return {error: true, data: null, message: err};
    }
}

async function getBudgetSchedule() {
    let budgetItems = [];
    let schedule = [];

    try {
        budgetItems = await BudgetItem.find({});
        budgetScheduleUtil.calculateBudgetSchedule(budgetItems);
        return budgetItems;
    } catch(err) {
        return {error: true, data: null, message: err};
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
    addBudgetItem: addBudgetItem,
    deleteBudgetItem: deleteBudgetItem,
    addExampleItem: addExampleItem,
    getBudgetSchedule: getBudgetSchedule,
    getPayFrequencies: getPayFrequencies
}