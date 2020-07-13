import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import bgrImg from '../../assets/Background-Form.jpg';
import decoration from '../../assets/Decoration.svg';

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    height: 830,  // wysokość obrazka w tle
    background: `url(${bgrImg}) no-repeat center/cover`,
    [theme.breakpoints.up('lg')]: {
      background: `url(${bgrImg}) no-repeat right/cover`
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    width: 670,
    fontWeight: 300,
    fontSize: '2.5rem',
    textAlign: 'center'
  },
  decoration: {
    marginTop: theme.spacing(3)
  }
}));

const FormSentPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.sectionContainer}>
      <Grid item xs={1} />
      <Grid item container xs={10} alignItems="center">
        <div className={classes.content}>
          <Typography variant="h4" component="h4" color="textPrimary" className={classes.header}>
            Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.
          </Typography>
          <img src={decoration} alt="Decoration" className={classes.decoration} />
        </div>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
 
export default FormSentPage;