import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography
} from '@material-ui/core';

import decoration from '../../../assets/Decoration.svg';
import CloseButton from './CloseButton';

const useStyles = makeStyles(theme => ({
  decoration: {
    margin: theme.spacing(4, 0, 8, 0)
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
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClick} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
}
 
export default DialogLogout;