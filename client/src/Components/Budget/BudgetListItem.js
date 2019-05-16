import React from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, FormHelperText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles/BudgetListItem.css';

const styles = {
    income: {
        color: '#6fbf73'
    },
    expense: {
        color: 'rgb(223, 97, 97)'
    },
    centeredColumn: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    }
}

function BudgetListItem(props) {
    const {classes} = props;
    let item = props.budgetItem;
    return (
        <Paper color="secondary" elevation={1} className="budget-list-item">
            <Grid container spacing={0}>
                <Grid item xs={11}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body1">Next pay date: {moment(item.nextPayDate).format("MM/DD/YYYY")}</Typography>
                    <Typography variant="body1">Frequency: {item.payFrequency}</Typography>
                    <Typography 
                        variant="body1" 
                        className={item.incomeFlag ? classes.income : classes.expense}
                    >Amount: ${item.amount.toFixed(2)}
                    </Typography>
                </Grid>

                <Grid item xs={1} 
                    className={classes.centeredColumn}>
                    <DeleteIcon onClick={e => props.deleteBudgetItem(item._id)} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(BudgetListItem);