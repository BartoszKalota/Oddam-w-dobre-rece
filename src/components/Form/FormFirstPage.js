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
    background: `url(${bgrImg}) no-repeat left/cover`,
    '@media (max-width:440px)': {
      height: 930
    },
    [theme.breakpoints.up('md')]: {
      background: `url(${bgrImg}) no-repeat center/cover`
    },
    [theme.breakpoints.up('lg')]: {
      background: `url(${bgrImg}) no-repeat right/cover`
    }
  },
  contentContainer: {
    padding: theme.spacing(0, 2, 0, 8),
    '@media (max-width:440px)': {
      padding: theme.spacing(0, 2, 0, 2)
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8, 0, 8)
    },
    [theme.breakpoints.up('md')]: {
      padding: 0
    }
  },
  step: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 300,
    fontSize: '1.5rem',
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      width: 'unset',
      textAlign: 'unset'
    }
  },
  header: {
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  errorMsg: {
    color: theme.palette.error.main,
    fontSize: '1.1rem'
  },
  buttonSection: {
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8)
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      padding: 0
    }
  },
  button: {
    minWidth: '100%',
    minHeight: 80,
    textTransform: 'none',
    fontSize: '1.5rem',
    fontWeight: 300,
    color: '#000',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      minWidth: 180
    }
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
        <Grid item xs={false} md={1} />
        <Grid item container xs={12} md={10} direction="column" justify="space-between">
          <Grid item container direction="column" alignItems="flex-start" className={classes.contentContainer}>
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
          <Grid item container className={classes.buttonSection}>
            <Button
              type="submit"
              variant="outlined"
              className={classes.button}
            >
              Dalej
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={false} md={1} />
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