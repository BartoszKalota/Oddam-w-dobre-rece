import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography
} from '@material-ui/core';

import decoration from '../../../assets/Decoration.svg';
import CloseButton from './CloseButton';

const useStyles = makeStyles(theme => ({
  decoration: {
    margin: theme.spacing(4, 0, 8, 0)
  },
  buttonSection: {
    justifyContent: 'center',
    paddingBottom: theme.spacing(2)
  },
  button: {
    textTransform: 'none',
    fontSize: '1.2rem',
    fontWeight: 300,
    padding: theme.spacing(1, 2),
    color: '#000',
    border: `1px solid ${theme.palette.text.primary}`,  // przezroczysta ramka (bez tego, tekst przycisku lekko się podnosi, gdy otrzyma klasę active)
    borderRadius: 0
  }
}));

const DialogLogout = ({ isOpened, closeDialog }) => {
  const classes = useStyles();
  const handleClick = () => closeDialog();
  return (
    <Dialog open={isOpened} onClose={handleClick} aria-labelledby="logout-dialog">
      <DialogTitle id="logout-dialog">
      <Typography variant="h3" component="p" align="center" color="textPrimary">
          Wylogowanie nastąpiło pomyślnie!
        </Typography>
        <CloseButton onClickProp={closeDialog} />
      </DialogTitle>
      <img src={decoration} alt="Decoration" className={classes.decoration} />
      <DialogActions className={classes.buttonSection}>
        <Button
          variant="text"
          onClick={handleClick}
          className={classes.button}
        >
          Zamknij to okno
        </Button>
      </DialogActions>
    </Dialog>
  );
}
 
export default DialogLogout;