import React from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import './styles/BudgetListItem.css';

function BudgetListItem(props) {
    let item = props.budgetItem;
    return (
        <Paper color="secondary" elevation={1} className="budget-list-item">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body1">Next pay date: {moment(item.nextPayDate).format("MM/DD/YYYY")}</Typography>
                    <Typography variant="body1">Frequency: {item.payFrequency}</Typography>
                    <Typography 
                        variant="body1" 
                        className={item.incomeFlag ? 'income' : 'expense'}
                    >Amount: ${item.amount.toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default BudgetListItem;