import React from "react";
import {Grid } from '@material-ui/core';
import CofeeCard from "./CofeeCard.jsx";
import constants from "./constants.js";

function Content(){
    
    function createCard(cardData){
        return(
            <Grid item sm={4} xs={12}>
                <CofeeCard {...cardData} />
            </Grid>
        )
    }

    return(
        <Grid container spacing={4} >
            {constants.map(cardData => createCard(cardData))}            
        </Grid>
    )
}

export default Content;