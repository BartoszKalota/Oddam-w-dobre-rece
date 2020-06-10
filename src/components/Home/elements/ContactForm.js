import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

const useStyles = makeStyles(theme => ({
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
      width: '100%'
    }
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
  placeholder
}) => (
  <>
    <CssTextField
      {...input}
      label={label}
      type={type}
      placeholder={placeholder}
      multiline
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

const onSubmit = (values) => {
  console.log('dupa');
};

const ContactForm = ({ handleSubmit, submitting, inputError }) => {
  const classes = useStyles();
  return (
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
        />
      </Grid>
      <button disabled={submitting}>Wyślij</button>
    </form>
  );
};

// Używane tylko do przeniesienia pewnych danych ze store (z pola reduxForm) do zarządzania klasą showError w komponencie
const mapStateToProps = (state) => ({
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