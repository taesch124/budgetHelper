import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';

import Grid from '@material-ui/core/Grid';
import Placeholder from './Components/Placeholder';
import Budget from './Components/Pages/Budget';

import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
        <Grid container spacing={0} >
          <Grid item xs={1}>
            <NavBar />
          </Grid>
          
          <Grid item xs={11}>
            <Route exact path="/" render={props => <Placeholder {...props}/>}/>
            <Route exact path="/budget" render={props => <Budget {...props}/>} />
          </Grid>
        </Grid>
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
