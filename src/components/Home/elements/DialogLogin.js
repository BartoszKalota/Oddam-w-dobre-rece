import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@material-ui/core';
import { Field, reduxForm, reset } from 'redux-form';

import decoration from '../../../assets/Decoration.svg';
import CloseButton from './CloseButton';

const useStyles = makeStyles(theme => ({
  decoration: {
    margin: theme.spacing(4, 0, 8, 0)
  },
  formSection: {
    padding: theme.spacing(0, 10)
  },
  loginForm: {
    width: 385,
    margin: '0 auto',
    backgroundColor: theme.palette.backgroundAltColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 0, 5, 0),
    '& > div:last-of-type': {
      marginTop: theme.spacing(4)
    }
  },
  bottomInput: {
    marginTop: theme.spacing(4)
  },
  showError: {
    height: 40,
    lineHeight: 2.5,
    color: theme.palette.error.main,
    fontWeight: 600
  },
  button: {
    width: 120,
    minHeight: 50,
    color: '#000',
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '1.2rem',
    border: `1px solid rgba(0, 0, 0, 0)`,
    borderRadius: 0
  },
  buttonMain: {
    border: `1px solid ${theme.palette.text.primary}`
  }
}));

const CssTextField = withStyles(theme => ({
  root: {
    width: 250,
    marginBottom: theme.spacing(1),
    '& label, & label.Mui-focused': {
      color: theme.palette.text.primary,
      fontWeight: 600
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.dividerColor
    },
    '& + span': {
      color: theme.palette.error.main,
      fontWeight: 600,
      fontSize: '0.7rem'
    }
  } 
}))(TextField);

const renderField = ({ input, label, type }) => (
  <CssTextField
    {...input}
    label={label}
    type={type}
  />
);

const onSubmit = (values, dispatch) => {
  console.warn(values);
  dispatch(reset('loginForm'));
};

const DialogLogin = ({ isOpened, closeDialog, registerDisplayed, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Dialog open={isOpened} onClose={() => closeDialog()} aria-labelledby="login-dialog">
      <DialogTitle id="login-dialog">
        <Typography variant="h3" component="p" align="center" color="textPrimary">
          Zaloguj się
        </Typography>
        <CloseButton onClickProp={closeDialog} />
      </DialogTitle>
      <img src={decoration} alt="Decoration" className={classes.decoration} />
      <DialogContent className={classes.formSection}>
        <form onSubmit={handleSubmit} id="loginForm" className={classes.loginForm}> {/* nadano id, żeby przycisk type="submit" działał poza formularzem */} 
          <Field 
            name="email"
            type="email"
            component={renderField}
            label="Email"
          />
          <Field 
            name="password"
            type="password"
            component={renderField}
            label="Hasło"
          />
        </form>
        <Typography component="p" align="center" className={classes.showError}>
          Niepoprawny adres email lub hasło
        </Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'space-between' }}>
        <Button
          onClick={() => registerDisplayed()}
          variant="text"
          className={classes.button}
        >
          Załóż konto
        </Button>
        <Button
          type="submit"
          form="loginForm"
          variant="text"
          className={clsx(classes.button, classes.buttonMain)}
        >
          Zaloguj się
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default reduxForm({
  form: 'loginForm',
  onSubmit
})(DialogLogin);