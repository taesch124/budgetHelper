const express = require('express');

const router = express.Router();
const budgetItemController = require('./../controllers/budgetItemController');

router.get('/budget-items', async (req, res) => {
    let result = {};

    try {
        result = await budgetItemController.getBudgetItems();
        return res.send(result);
    } catch(err) {
        console.error(err);
        result = {error: true, message: err};
        return res.send(result);
    }

    
});

router.post('/add-test', async (req, res) => {
    let result = {}
    try {
        result = await budgetItemController.addExampleItem();
        return res.send(result);
    } catch(err) {
        result = {error: true, message: err};
        return res.send(result);
    }
});

router.post('/add-item', async (req, res) => {
    let result = {};
    try {
        result = await budgetItemController.addBudgetItem(req.body);
        return res.send(result);
    } catch(err) {
        result = {error: true, message: err};
        return res.send(result);
    }
});

router.get('/pay-frequencies', async (req, res) => {
    let result = {};
    try {
        result = await budgetItemController.getPayFrequencies();
        return res.send(result);
    } catch(err) {
        result = {error: true, message: err};
        return res.send(result);
    }
})

module.exports = router;