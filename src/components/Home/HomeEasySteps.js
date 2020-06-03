import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import decoration from '../../assets/Decoration.svg';

const useStyles = makeStyles(theme => ({
  easyStepsSection: {
    padding: theme.spacing(6, 0, 10, 0)
  },
  decoration: {
    margin: theme.spacing(3, 0, 4, 0)
  }
}));

const HomeEasySteps = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.easyStepsSection} id="section2">
      <Grid item container direction="column" alignItems="center">
        <Typography variant="h4" component="h3" color="textPrimary">
          Wystarczą 4 proste kroki
        </Typography>
        <img src={decoration} alt="Decoration" className={classes.decoration} />
      </Grid>
    </Grid>
  );
}
 
export default HomeEasySteps;