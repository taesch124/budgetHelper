const moment = require('moment');
const payDateUtil = require('./payDateUtility');

function calculateBudgetSchedule(budgetItems) {
    let startMonth = moment().startOf('month');
    console.log(startMonth);
    //console.log(budgetItems);

    for(let i = 0; i < 1; i++) {
        let current = budgetItems[i];
        console.log(current);
        //if(current.nextPayDate)
    }
}

module.exports = {
    calculateBudgetSchedule: calculateBudgetSchedule
}