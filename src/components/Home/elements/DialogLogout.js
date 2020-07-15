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
  dialogWindow: {
    '& .MuiDialog-container .MuiPaper-root': {
      padding: theme.spacing(7, 0),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(7)
      }
    },
    '& .MuiDialog-paperWidthSm': {
      width: '100vw',
      [theme.breakpoints.up('sm')]: {
        width: 'unset'
      }
    },
    '& .MuiDialog-paper': {
      margin: 0,
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(4)
      }
    }
  },
  header: {
    padding: theme.spacing(2, 3),
    '& p': {
      fontSize: '3rem',
    },
    '@media (max-width:350px)': {
      '& p': {
        fontSize: '2.5rem'
      }
    },
    '@media (max-width:450px)': {
      padding: theme.spacing(2, 0)
    }
  },
  decoration: {
    margin: theme.spacing(4, 0, 8, 0)
  },
  buttonSection: {
    justifyContent: 'center',
    padding: theme.spacing(0, 2, 2, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 0, 2, 0)
    }
  },
  button: {
    width: '100%',
    textTransform: 'none',
    fontSize: '1.2rem',
    fontWeight: 300,
    padding: theme.spacing(1, 2),
    color: '#000',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    }
  }
}));

const DialogLogout = ({ isOpened, closeDialog }) => {
  const classes = useStyles();
  const handleClick = () => closeDialog();
  return (
    <Dialog open={isOpened} onClose={handleClick} aria-labelledby="logout-dialog" className={classes.dialogWindow}>
      <DialogTitle id="logout-dialog" className={classes.header}>
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