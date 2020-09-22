import React from "react";
import {AppBar, Toolbar ,Typography} from "@material-ui/core";
import AirplayIcon from '@material-ui/icons/Airplay';
import { makeStyles } from "@material-ui/core/styles";

const useStyles= makeStyles({
    typoStyles:{
        flex:1
    }
});

function Header(){
    const classes=useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typoStyles}>
                    KS Appliances
                </Typography>
                <AirplayIcon />
            </Toolbar>
        </AppBar>


    ) 
}

export default Header;