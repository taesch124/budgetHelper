const moment = require('moment');

function calculateNextPayDate(payDate, frequency) {
    //TODO default to monthly for now, add switch for all frequencies
    
    let currentDate = moment();
    payDate = moment(payDate);
    let nextPayDate = payDate;

    if(nextPayDate < currentDate) {
        nextPayDate = handleMonthlyPayment(nextPayDate);
    }

    return nextPayDate;
}

function handleMonthlyPayment(payDate) {
    let currentDate = moment();
    while(payDate < currentDate) {
        payDate.add(1, 'M');
        console.log(payDate);
    }

    return payDate;
}

function handleWeeklyPayment(payDate) {
    let currentDate = moment();
    while(payDate < currentDate) {
        payDate.add(1, 'w');
    }
    return payDate;
}

module.exports = {
    calculateNextPayDate: calculateNextPayDate
}