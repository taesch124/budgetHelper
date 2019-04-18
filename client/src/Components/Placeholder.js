import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import logo from './../logo.svg';

function Placeholder(props) {
    return (
        <Grid container spacing={0}>
            <Grid item cs={12} className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="body1" color="textPrimary">Ready for back end APIs!</Typography>
            </Grid>
        </Grid>
        
    )
}

export default Placeholder;