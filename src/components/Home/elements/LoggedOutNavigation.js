import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  authNavSection: {
    textTransform: 'none',
    padding: theme.spacing(0.62, 2.5),
    color: theme.palette.text.primary,
    borderRadius: 0
  }
}));

const LoggedOutNavigation = ({ loginDisplayed, registerDisplayed }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="text"
        onClick={() => loginDisplayed()}
        className={classes.authNavSection}
      >
        Zaloguj
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => registerDisplayed()}
        className={classes.authNavSection}
      >
        Załóż konto
      </Button>
    </>
  );
}
 
export default LoggedOutNavigation;