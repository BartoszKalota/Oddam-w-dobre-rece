import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

import { registerUser, clearUserError } from '../../../config/redux/actions/fetchingUserAction';

import decoration from '../../../assets/Decoration.svg';
import CloseButton from './CloseButton';

const useStyles = makeStyles(theme => ({
  dialogWindow: {
    '& .MuiDialog-container .MuiPaper-root': {
      padding: theme.spacing(7)
    }
  },
  decoration: {
    margin: theme.spacing(4, 0, 8, 0)
  },
  formSection: {
    padding: theme.spacing(0, 10)
  },
  registerForm: {
    width: 385,
    margin: '0 auto',
    backgroundColor: theme.palette.backgroundAltColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 0, 5, 0),
    '& > div': {
      marginTop: theme.spacing(4)
    },
    '& > div:first-of-type': {
      marginTop: 0
    }
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

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
  disabled
}) => (
  <>
    <CssTextField
      {...input}
      label={label}
      type={type}
      disabled={disabled}
    />
    {touched && error && <span>{error}</span>}
  </>
);

const validate = ({ email, password, repeatedPassword }) => {
  const errors = {};
  if (
    !email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    errors.email = 'Podany email jest nieprawidłowy!';
  }
  if (!password || password.length < 6) {
    errors.password = 'Podane hasło jest za krótkie!';
  }
  if (repeatedPassword !== password) {
    errors.repeatedPassword = 'Powtórzone hasło musi być takie samo!';
  }
  return errors;
};

const onSubmit = (values, dispatch) => {
  dispatch(registerUser(values));
};

const DialogRegister = ({
  isOpened, closeDialog, loginDisplayed,
  handleSubmit, isLoading, errorMsg,
  clearUserError
}) => {
  const classes = useStyles();

  useEffect(() => {
    return () => clearUserError();
  }, []);

  return (
    <Dialog open={isOpened} onClose={() => closeDialog()} aria-labelledby="register-dialog" className={classes.dialogWindow}>
      <DialogTitle id="register-dialog">
        <Typography variant="h3" component="p" align="center" color="textPrimary">
          Zarejestruj się
        </Typography>
        <CloseButton onClickProp={closeDialog} />
      </DialogTitle>
      <img src={decoration} alt="Decoration" className={classes.decoration} />
      <DialogContent className={classes.formSection}>
        <form onSubmit={handleSubmit} id="registerForm" className={classes.registerForm}> {/* nadano id, żeby przycisk type="submit" działał poza formularzem */} 
          <Field 
            name="email"
            type="email"
            component={renderField}
            label="Email"
            disabled={isLoading}
          />
          <Field 
            name="password"
            type="password"
            component={renderField}
            label="Hasło"
            disabled={isLoading}
          />
          <Field 
            name="repeatedPassword"
            type="password"
            component={renderField}
            label="Powtórz hasło"
            disabled={isLoading}
          />
        </form>
        <Typography component="p" align="center" className={classes.showError}>
          {errorMsg && errorMsg}
        </Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'space-between' }}>
        <Button
          onClick={() => loginDisplayed()}
          variant="text"
          className={classes.button}
        >
          Zaloguj się
        </Button>
        <Button
          type="submit"
          form="registerForm"
          variant="text"
          disabled={isLoading}
          className={clsx(classes.button, classes.buttonMain)}
          style={{
            backgroundColor: isLoading ? 'darkgrey' : 'unset'
          }}
        >
          Załóż konto
          {isLoading && <CircularProgress color="primary" style={{ position: 'absolute' }} />}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.user.isFetchingUser,
  errorMsg: state.user.userError
});
const mapDispatchToProps = (dispatch) => ({
  clearUserError: () => dispatch(clearUserError())
});
 
export default compose(
  reduxForm({
    form: 'registerForm',
    validate,
    onSubmit
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(DialogRegister);