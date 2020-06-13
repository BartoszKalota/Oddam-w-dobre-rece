import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const DialogLogin = ({ isOpened, closeDialog }) => {
  const classes = useStyles();
  const handleClick = () => closeDialog();
  return (
    <Dialog open={isOpened} onClose={handleClick} aria-labelledby="login-dialog">
      <DialogTitle id="login-dialog">
        <Typography variant="h3" component="p" align="center" color="textPrimary">
          Zaloguj się
        </Typography>
        <IconButton aria-label="close" onClick={handleClick} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
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
};
 
export default DialogLogin;