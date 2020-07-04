import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Button,
  Grid,
  TextField,
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
    marginBottom: theme.spacing(2.5)
  },
  subHeader: {
    fontWeight: 600,
    marginTop: theme.spacing(6.25)
  },
  errorMsg: {
    color: theme.palette.error.main,
    fontSize: '1.1rem',
    marginTop: theme.spacing(2)
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
  },
  buttonBack: {
    marginRight: theme.spacing(6.25)
  }
}));

const CssTextField = withStyles(theme => ({
  root: {
    width: 256,
    marginTop: theme.spacing(2.5),
    border: `1px solid ${theme.palette.text.primary}`,
    '& input': {
      fontSize: '1.5rem',
      fontWeight: 300,
      padding: '5.5px 14px'
    }
  }
}))(TextField);

const renderInput = ({ input }) => (
  <CssTextField
    {...input}
    variant="outlined"
    label={false}
  />
);

const FormFourthPage = ({
  formData: {
    importantTitle, importantDescr, formHeader,
    addressSectionTitle, addressInputs, dateSectionTitle, dateInputs
  },
  formError,
  onSubmit, prevPage
}) => {
  const classes = useStyles();
  const [readyToValidate, setReadyToValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadyToValidate(true);
    // if (!formError?.location && !formError?.toggleBtns) {
      onSubmit();
    // }
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
            <Typography variant="body1" component="p" color="textPrimary" className={classes.step}>
              Krok 4/4
            </Typography>
            <Typography variant="h4" component="h4" className={classes.header}>
              {formHeader}
            </Typography>
            
          </Grid>
          <Grid item container>
            <Button
              variant="outlined"
              onClick={() => prevPage()}
              className={clsx(classes.button, classes.buttonBack)}
            >
              Wstecz
            </Button>
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
)(FormFourthPage);