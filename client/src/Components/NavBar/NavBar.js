import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import './NavBar.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function NavBar(props) {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            className="navbar"
        >
            <AppBar position="static" className="app-bar" color="primary">
                <List className="nav-menu-list">
                    <ListItem>
                        <Button href="/">Home</Button>
                    </ListItem>
                    <ListItem>
                        <Button href="/budget">Budget</Button>
                    </ListItem>
                </List>
            </AppBar>
        </Drawer>
    )
}

export default NavBar;