import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const DialogLogout = ({ isOpened, closeDialog }) => {
  const handleClick = () => closeDialog();
  return (
    <Dialog open={isOpened} onClose={handleClick} aria-labelledby="logout-dialog">
      <DialogTitle id="logout-dialog">Logout</DialogTitle>
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