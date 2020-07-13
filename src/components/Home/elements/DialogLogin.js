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

import { loginUser, clearUserError } from '../../../config/redux/actions/fetchingUserAction';

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
  decoration: {
    margin: theme.spacing(4, 0, 8, 0)
  },
  formSection: {
    padding: 0,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 10)
    }
  },
  loginForm: {
    width: '100%',
    margin: 0,
    backgroundColor: theme.palette.backgroundAltColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 0, 5, 0),
    '& > div:last-of-type': {
      marginTop: theme.spacing(4)
    },
    [theme.breakpoints.up('sm')]: {
      width: 385,
      margin: '0 auto'
    }
  },
  showError: {
    height: 40,
    lineHeight: 2.5,
    color: theme.palette.error.main,
    fontWeight: 600
  },
  buttonsSection: {
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    padding: theme.spacing(1, 2),
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap'
    },
    '& button:last-of-type': {
      marginLeft: 0,
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        marginBottom: 0
      }
    }
  },
  button: {
    width: '100%',
    minHeight: 50,
    color: '#000',
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '1.2rem',
    border: `1px solid rgba(0, 0, 0, 0)`,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      width: 120
    }
  },
  buttonMain: {
    border: `1px solid ${theme.palette.text.primary}`
  }
}));

const CssTextField = withStyles(theme => ({
  root: {
    width: `calc(100% - ${theme.spacing(8)}px)`,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
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
    },
    [theme.breakpoints.up('sm')]: {
      width: 250,
      marginLeft: 'unset',
      marginRight: 'unset'
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

const validate = ({ email, password }) => {
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
  return errors;
};

const onSubmit = (values, dispatch) => {
  dispatch(loginUser(values));
};

const DialogLogin = ({
  isOpened, closeDialog, registerDisplayed,
  handleSubmit, isLoading, errorMsg,
  clearUserError
}) => {
  const classes = useStyles();

  useEffect(() => {
    return () => clearUserError();
  }, []);

  return (
    <Dialog open={isOpened} onClose={() => closeDialog()} aria-labelledby="login-dialog" className={classes.dialogWindow}>
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
            disabled={isLoading}
          />
          <Field 
            name="password"
            type="password"
            component={renderField}
            label="Hasło"
            disabled={isLoading}
          />
        </form>
        <Typography component="p" align="center" className={classes.showError}>
          {errorMsg && errorMsg}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.buttonsSection}>
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
          disabled={isLoading}
          className={clsx(classes.button, classes.buttonMain)}
          style={{
            backgroundColor: isLoading ? 'darkgrey' : 'unset'
          }}
        >
          Zaloguj się
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
    form: 'loginForm',
    validate,
    onSubmit
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(DialogLogin);