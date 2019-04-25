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
        axios.get('/api/budget/budget-items')
        .then(response => {
            console.log(response.data);
            this.setState({
                budgetItems: response.data
            })
        })
        .catch(error => {
            console.error(error);
        });
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
                    /> 
            </Grid>
        )
    }

    toggleBudgetItemModal = () => {
        this.setState({
            budgetItemModalOpen: !this.state.budgetItemModalOpen
        });
    }
}

export default BudgetItemsContainer;