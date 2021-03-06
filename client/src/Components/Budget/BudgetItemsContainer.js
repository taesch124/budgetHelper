import React, { Component } from 'react';
import axios from 'axios';

import BudgetListItem from './BudgetListItem';
import BudgetItemFormModal from './Modals/BudgetItemFormModal';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';

class BudgetItemsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            budgetItems: [],
            budgetItemModalOpen: false,
        }
    }

    componentWillMount() {
        this.getBudgetItems();
        this.getBudgetSchedule();
    }
    
    render() {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="h3">Budget Items</Typography>
                </Grid>
                <Grid item xs={12}>
                    {/*Placeholder for icons to add/remove items*/}
                    <AddIcon className="clickable" color="primary" onClick={this.state.budgetItemModalOpen ? null : this.toggleBudgetItemModal} />
                </Grid>
                <Grid item xs={12}>
                    {this.state.budgetItems.length > 0 ?
                        <List>
                            {this.state.budgetItems.map((e, i) => {
                                return (
                                    <BudgetListItem
                                        key={i}
                                        budgetItem={e}
                                        deleteBudgetItem={this.deleteBudgetItem}
                                    />
                                )
                            })}
                        </List> :
                        <Typography variant="h5">No items yet, add one first!</Typography>
                    }
                </Grid>
                    <BudgetItemFormModal 
                        open={this.state.budgetItemModalOpen} 
                        toggleBudgetItemModal={this.toggleBudgetItemModal}
                        getBudgetItems={this.getBudgetItems}
                    /> 
            </Grid>
        )
    }

    toggleBudgetItemModal = () => {
        this.setState({
            budgetItemModalOpen: !this.state.budgetItemModalOpen
        });
    }

    getBudgetItems = () => {
        axios.get('/api/budget/budget-items')
        .then(response => {
            this.setState({
                budgetItems: response.data
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    getBudgetSchedule = () => {
        axios.get('/api/budget/schedule')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

    deleteBudgetItem = (id) => {
        console.log(id);
        axios.delete('/api/budget/delete-item/' + id)
        .then(response => {
            if(response.data.error) {
                console.error(response.data.error);
                return;
            }

            this.getBudgetItems();
        })
        .catch(error => {
            console.error(error);
        })
    }
}

export default BudgetItemsContainer;