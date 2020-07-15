import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';

import * as ROUTES from '../config/routes';

const useStyles = makeStyles(theme => ({
  background: {
    width: '100vw',
    minHeight: '100vh',
    background: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '20vh'
  },
  content: {
    width: 500,
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.primary.main}`,
    display: 'flex',
    flexDirection: 'column'
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(2, 0)
  },
  button: {
    textTransform: 'none',
    fontSize: '0.9rem',
    fontWeight: 300,
    padding: theme.spacing(1, 2),
    color: '#000',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    margin: '30px auto 5px'
  }
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <main className={classes.background}>
      <Paper elevation={0} className={classes.content}>
        <Typography variant="h4" component="h1" className={classes.heading}>
          Błąd 404
        </Typography>
        <Typography variant="h6" component="h2" className={classes.heading}>
          (Nie ma takiej strony)
        </Typography>
        <Button
          variant="text"
          onClick={() => history.push(ROUTES.HOME)}
          className={classes.button}
        >
          Powrót do strony głównej
        </Button>
      </Paper>
    </main>
  );
}
 
export default NotFound;