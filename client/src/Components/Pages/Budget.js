import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import BudgetItemsContainer from './../Budget/BudgetItemsContainer';

class Budget extends Component {
    render() {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="h1">Budget</Typography>
                </Grid>
                <Grid item xs={12}>
                    <BudgetItemsContainer />
                </Grid>
            </Grid>
        )
    }
}

export default Budget;