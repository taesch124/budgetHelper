import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

import {Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './../styles/BudgetItemFormModal.css';


class BudgetItemFormModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            title: '',
            nextPayDate: moment(new Date()).format('YYYY-MM-DD'),
            frequency: '',
            amount: 0
        }
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent className="dialog">
                        <Grid container spacing={12} justify="center">
                            <Grid item xs={12}>
                                <DialogTitle align="center" id="budget-item-form-title">New Budget Item</DialogTitle>
                            </Grid>
                            
                            <Grid item xs={12} align="center">
                                <TextField 
                                    id="title"
                                    name="title"
                                    label="Title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    type="text"
                                    InputLabelProps={{shrink: true}}
                                />
                            </Grid>

                            <Grid item xs={12} align="center">
                                <TextField 
                                    id="nextPayDate"
                                    name="nextPayDate"
                                    label="Next Pay Date"
                                    value={this.state.nextPayDate}
                                    onChange={this.handleChange}
                                    type="date"
                                    
                                />
                            </Grid>

                            <Grid item xs={12} align="center">
                                <TextField
                                    id="frequency"
                                    name="frequency"
                                    label="Frequency"
                                    value={this.state.frequency}
                                    onChange={this.handleChange}
                                    type="text"
                                    InputLabelProps={{shrink: true}}
                                />
                            </Grid>

                            <Grid item xs={12} align="center">
                                <TextField
                                    id="amount"
                                    name="amount"
                                    label="Amount"
                                    value={this.state.amount}
                                    onChange={this.handleChange}
                                    type="number"
                                />
                            </Grid>

                            <Grid item xs={6} align="right">
                                <Button onClick={e => this.props.toggleBudgetItemModal()} align="center">Close</Button>
                            </Grid>
                            
                        </Grid>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }

    handleChange = (e) => {
        console.log(this.state.title);
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        
    }
}

export default BudgetItemFormModal;