import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import { Field, reduxForm, reset } from 'redux-form';

import { sendMessage } from '../../../config/redux/actions/sendMessageAction';

const FORM_API = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

const useStyles = makeStyles(theme => ({
  submitSuccInfo: {
    width: 250,
    minHeight: 50,
    margin: theme.spacing(3, 0, 3, 0),
    color: theme.palette.success.main,
    fontWeight: 600
  },
  contactForm: {
    width: 530
  },
  showError: {
    '& .MuiInput-underline:after': {
      borderBottomColor: [[theme.palette.error.main], '!important']
    }
  },
  textarea: {
    marginTop: theme.spacing(4),
    '& > div': {
      width: '100%',
      '& > div > textarea': {
        height: [[77], '!important'],
        overflow: [['auto'], '!important']
      }
    }
  },
  button: {
    width: 150,
    minHeight: 50,
    color: '#000',
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '1.2rem',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    marginTop: theme.spacing(4)
  }
}));

const CssTextField = withStyles(theme => ({
  root: {
    width: '100%',
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
  placeholder,
  disabled
}) => (
  <>
    <CssTextField
      {...input}
      label={label}
      type={type}
      placeholder={placeholder}
      multiline
      disabled={disabled}
    />
    {touched && error && <span>{error}</span>}
  </>
);

const validate = ({ name, email, msg }) => {
  const errors = {};
  if (!name || name.trim().includes(' ')) {
    errors.name = 'Podane imię jest nieprawidłowe!';
  }
  if (
    !email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    errors.email = 'Podany email jest nieprawidłowy!';
  }
  if (!msg || msg.length < 120) {
    errors.msg = 'Wiadomość musi mieć co najmniej 120 znaków!';
  }
  return errors;
};

const onSubmit = (values, dispatch) => {  // values: name, email, msg
  dispatch(sendMessage(values, FORM_API));  // bezpośrednia implementacja akcji (bez przechodzenia przez propsa), bo potrzebne dane przychodzą z values
  dispatch(reset('contactForm'));
};

const ContactForm = ({ handleSubmit, submitting, submitSucceeded, inputError }) => {
  const classes = useStyles();
  return (
    <>
      <Typography component="p" align="center" className={classes.submitSuccInfo}>
        {submitSucceeded ? 'Wiadomość została wysłana! Wkrótce się skontaktujemy.' : ''}
      </Typography>
      <form onSubmit={handleSubmit} className={classes.contactForm}>
        <Grid container>
          <Grid
            item container xs={6}
            direction="column"
            alignItems="flex-start"
            style={{ paddingRight: 8 }}
            className={
              !!inputError ? classes.showError : ''
            }
          >
            <Field 
              // Field przyjmuje tylko określone atrybuty - className nie przyjmuje.
              // Dlatego poziom wyżej używany jest Grid do przepuszczenia styli klasy.
              name="name"
              type="text"
              component={renderField}
              label="Wpisz swoje imię"
              placeholder="Krzysztof"
              disabled={submitSucceeded}
            />
          </Grid>
          <Grid
            item container xs={6}
            direction="column"
            alignItems="flex-start"
            style={{ paddingLeft: 8 }}
            className={
              !!inputError ? classes.showError : ''
            }
          >
            <Field
              name="email"
              type="email"
              component={renderField}
              label="Wpisz swój email"
              placeholder="abc@xyz.pl"
              disabled={submitSucceeded}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="flex-start"
          className={
            !!inputError
              ? clsx(classes.textarea, classes.showError)
              : classes.textarea
          }
        >
          <Field
            name="msg"
            type="text"
            component={renderField}
            label="Wpisz swoją wiadomość"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            disabled={submitSucceeded}
          />
        </Grid>
        <Grid container justify="flex-end">
          <Button
            type="submit"
            disabled={submitting || submitSucceeded}
            variant="text"
            className={classes.button}
            style={{
              backgroundColor: submitting ? 'darkgrey' : 'unset'
            }}
          >
            Wyślij
            {submitting && <CircularProgress color="primary" style={{ position: 'absolute' }} />}
          </Button>
        </Grid>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({ // używane tylko do przeniesienia pewnych danych ze store (z pola reduxForm) do zarządzania klasą showError w komponencie
  inputError: state.form.contactForm.syncErrors
});

export default compose(
  reduxForm({
    form: 'contactForm',
    validate,
    onSubmit
  }),
  connect(mapStateToProps)
)(ContactForm);