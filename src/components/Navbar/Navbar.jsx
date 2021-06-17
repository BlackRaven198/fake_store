import React from 'react';
import { AppBarr, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart  } from '@material-ui/icons';
import classes from '*.module.css';
import logo from "src/assets/Business_(170).jpg"

const Navbar = () => {
    return (
        <>
            <AppBarr position="fixed" className={classes.appBarr} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo}  alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}/>
                        <IconButton aria-label="Show cart items" color="inerit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        <IconButton/>
                </Toolbar>
            </AppBarr>


        </>
    )
}

export default Navbar
