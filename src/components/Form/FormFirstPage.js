import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import bgrImg from '../../assets/Background-Form.jpg';
import ImportantBar from './elements/ImportantBar';

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    height: 830,  // wysokość obrazka w tle
    background: `url(${bgrImg}) no-repeat right/cover`
  },
  step: {
    fontWeight: 300,
    fontSize: '1.5rem',
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(6)
  },
  header: {
    fontWeight: 600,
    marginBottom: theme.spacing(5)
  },
  errorMsg: {
    color: theme.palette.error.main,
    fontSize: '1.1rem'
  },
  button: {
    minWidth: 180,
    minHeight: 80,
    textTransform: 'none',
    fontSize: '1.5rem',
    fontWeight: 300,
    color: '#000',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    marginBottom: theme.spacing(6)
  }
}));

const CssFormControlLabel = withStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3.5),
    '& .MuiIconButton-label': {
      display: 'block',
      width: 40,
      height: 40,
      border: `1px solid ${theme.palette.text.primary}`,
      '& .MuiSvgIcon-root': {   // usunięcie domyślnej ikony zaznaczenia
        display: 'none'
      }
    },
    '& .Mui-checked .MuiIconButton-label': {  // tło efektem zaznaczenia
      backgroundColor: theme.palette.primary.main
    },
    '& .MuiTypography-root': {
      fontSize: '1.5rem',
      fontWeight: 300,
      marginLeft: theme.spacing(2.7)
    }
  }
}))(FormControlLabel);

const renderCheckbox = ({ input, label }) => (
  <CssFormControlLabel
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
    label={label}
  />
);

const FormFirstPage = ({
  formData: { importantTitle, importantDescr, formHeader, checkboxes },
  formError,
  onSubmit
}) => {
  const classes = useStyles();
  const [readyToValidate, setReadyToValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadyToValidate(true);
    if (!formError?.checkboxes) { // bez ? wywala błąd, bo nie może odczytać tego pola
      onSubmit();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <ImportantBar
        importantTitle={importantTitle}
        importantDescr={importantDescr}
      />
      <Grid container className={classes.sectionContainer}>
        <Grid item xs={1} />
        <Grid item container xs={10} direction="column" justify="space-between">
          <Grid item container direction="column" alignItems="flex-start">
            <Typography
              variant="body1"
              component="p"
              color="textPrimary"
              className={classes.step}
            >
              Krok 1/4
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              className={classes.header}
            >
              {formHeader}
            </Typography>
            <div>
              {checkboxes.map(({ id, name, label }) => (
                <Grid container key={id}>
                  <Field
                    name={name}
                    component={renderCheckbox}
                    label={label}
                  />
                </Grid>
              ))}
            </div>
            {readyToValidate && formError && (
              <Typography component="p" className={classes.errorMsg}>
                {formError.checkboxes}
              </Typography>
            )}
          </Grid>
          <Grid item container>
            <Button
              type="submit"
              variant="outlined"
              className={classes.button}
            >
              Dalej
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </form>
  );
};

const mapState = (state) => ({
  formError: state.form.formMain.syncErrors
});

export default compose(
  reduxForm({
    form: 'formMain',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  }),
  connect(mapState)
)(FormFirstPage);