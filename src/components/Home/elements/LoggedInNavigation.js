import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Typography } from '@material-ui/core';

import * as ROUTES from '../../../config/routes';

const useStyles = makeStyles(theme => ({
  userText: {
    fontSize: '0.9rem',
    lineHeight: 2.5,
    marginRight: 20
  },
  loggedNavButton: {
    textTransform: 'none',
    borderRadius: 0
  },
  loggedNavButtonMain: {
    padding: theme.spacing(0.62, 1),
    color: '#000',
  },
  loggedNavButtonInferior: {
    padding: theme.spacing(0.62, 2.5),
    color: theme.palette.fontColorInferior
  }
}));

const LoggedInNavigation = ({ userEmail, logout }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body1" component="p" className={classes.userText}>
        {`Cześć ${userEmail}!`}
      </Typography>
      <Link to={ROUTES.LOGIN}>
        <Button
          variant="outlined"
          color="primary"
          className={
            clsx(classes.loggedNavButton, classes.loggedNavButtonMain)
          }
        >
          Oddaj rzeczy
        </Button>
      </Link>
      <Button
        variant="text"
        onClick={() => logout()}
        className={
          clsx(classes.loggedNavButton, classes.loggedNavButtonInferior)
        }
      >
        Wyloguj
      </Button>
    </>
  );
}
 
export default LoggedInNavigation;