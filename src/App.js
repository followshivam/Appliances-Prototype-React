import React from 'react';
import './index.css';
import { Button ,Typography ,Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header.jsx";
import Content from "./content.jsx";

const useStyles= makeStyles({
  buttonStyle: {
    color:"grey",
    fontSize:"33px"
  }
});

function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item> <Header /> </Grid>
         <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}> <Content /> </Grid>
          <Grid item xs={0} sm={2} /> 
         </Grid>
      </Grid>
{/* 
      <Typography className={classes.buttonStyle}  align="center" variant="h4"> Hello there! </Typography>
      <Button style={{align:"center"}} className="button" color="secondary" variant="outlined"> Upload here </Button> */}
    </div>
  );
}

export default App;
