import React, { useState, useEffect, useRef, createRef } from 'react';
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
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  TimePicker
} from '@material-ui/pickers';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import bgrImg from '../../assets/Background-Form.jpg';
import ImportantBar from './elements/ImportantBar';

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    height: 830,  // wysokość obrazka w tle
    background: `url(${bgrImg}) no-repeat left/cover`,
    overflow: 'auto',
    [theme.breakpoints.up('md')]: {
      background: `url(${bgrImg}) no-repeat center/cover`
    },
    [theme.breakpoints.up('lg')]: {
      background: `url(${bgrImg}) no-repeat right/cover`
    }
  },
  contentContainer: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8)
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
    width: '100%',
    fontWeight: 600,
    textAlign: 'center',
    textShadow: '2px 2px 3px #FFF',
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  subHeader: {
    width: '100%',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: theme.spacing(6.25),
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  inputSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: 'unset'
    },
    '@media (min-width:1170px)': {
      flexDirection: 'row'
    },
    '& > div': {
      marginRight: 0,
      padding: theme.spacing(0, 2),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(10),
        padding: 0
      }
    },
    '& > div:last-of-type': {
      marginBottom: theme.spacing(6),
      '@media (min-width:1170px)': {
        marginBottom: 0
      }
    }
  },
  inputContainer: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  textFieldContainer: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'unset'
    },
    '& span': {
      color: theme.palette.error.main,
      fontSize: '1.1rem',
      marginTop: theme.spacing(1),
      display: 'block'
    }
  },
  textAreaContainer: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  inputLabel: {
    width: '100%',
    color: '#000',
    fontSize: '1.5rem',
    fontWeight: 300,
    lineHeight: 1.1,
    textAlign: 'center',
    marginRight: 0,
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width: 112,
      textAlign: 'left',
      marginRight: theme.spacing(2),
      marginBottom: 0
    }
  },
  errorMsg: {
    color: theme.palette.error.main,
    fontSize: '1.1rem',
    marginTop: theme.spacing(1)
  },
  buttonSection: {
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'unset',
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
  },
  buttonBack: {
    marginRight: theme.spacing(6.25)
  }
}));

const CssTextField = withStyles(theme => ({
  root: {
    width: '100%',
    border: `1px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.dropdownMenuBgr,
    '& input, & textarea': {
      fontSize: '1.5rem',
      fontWeight: 300,
      lineHeight: 1,
      padding: '5.5px 14px'
    },
    '& fieldset': {
      border: 0
    },
    [theme.breakpoints.up('sm')]: {
      width: 256
    }
  }
}))(TextField);

const renderInput = ({ input, meta: { touched, error }}) => (
  <>
    <CssTextField
      {...input}
      variant="outlined"
      label={false}
    />
    {touched && error && <span>{error}</span>}
  </>
);

const renderTextArea = ({ input }) => (
  <CssTextField
    {...input}
    variant="outlined"
    label={false}
    multiline
    rows={4}
  />
);

const CssKeyboardDatePicker = withStyles(theme => ({
  root: {
    width: '100%',
    border: `1px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.dropdownMenuBgr,
    '& input': {
      fontSize: '1.5rem',
      fontWeight: 300,
      lineHeight: 1,
      padding: '5.5px 14px'
    },
    '& button': {
      padding: 0,
      '& span': {
        color: theme.palette.text.primary
      }
    },
    '& fieldset': {
      border: 0
    },
    [theme.breakpoints.up('sm')]: {
      width: 256
    }
  }
}))(KeyboardDatePicker);

const renderDateInput = ({ input, selectedDate, setSelectedDate }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <CssKeyboardDatePicker
      {...input}
      disableToolbar
      variant="inline"
      inputVariant="outlined"
      format="dd/MM/yyyy"
      label={false}
      value={selectedDate}
      onChange={setSelectedDate}
      KeyboardButtonProps={{
        'aria-label': 'change date'
      }}
    />
  </MuiPickersUtilsProvider>
);

const CssTimePicker = withStyles(theme => ({
  root: {
    width: '100%',
    border: `1px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.dropdownMenuBgr,
    '& input': {
      fontSize: '1.5rem',
      fontWeight: 300,
      lineHeight: 1,
      padding: '5.5px 14px'
    },
    '& fieldset': {
      border: 0
    },
    [theme.breakpoints.up('sm')]: {
      width: 256
    }
  }
}))(TimePicker);

const renderTimeInput = ({ input, selectedTime, setSelectedTime }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <CssTimePicker
      {...input}
      variant="inline"
      inputVariant="outlined"
      ampm={false}
      label={false}
      value={selectedTime}
      onChange={setSelectedTime}
    />
  </MuiPickersUtilsProvider>
);

const FormFourthPage = ({
  formData: {
    importantTitle, importantDescr, formHeader,
    addressSectionTitle, addressInputs,
    dateSectionTitle, dayName, dayLabel, hourName, hourLabel, textAreaName, textAreaLabel
  },
  formError, formValues,
  onSubmit, prevPage
}) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('2018-01-01T00:00:00.000Z');
  const [readyToValidate, setReadyToValidate] = useState(false);
  const addressInputsRefs = useRef(addressInputs.map(() => createRef()));

  useEffect(() => {
    const inputPhone = document.querySelector('input[name="addressPhone"]');
    inputPhone.setAttribute('type', 'number');
  }, []);

  // Wewnętrzna walidacja dla pól dayName i hourName, bo te nie są widoczne z poziomu głównej funkcji walidującej (validate.js)
  const internalValidationForDateInputs = () => {
    if (formValues?.dateDay && formValues?.dateHour) {  // rzeczywiste nazwy pól dayName i hourName
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadyToValidate(true);
    const internalValidation = internalValidationForDateInputs();
    if (
      !formError?.addressStreet &&
      !formError?.addressCity &&
      !formError?.addressCode &&
      !formError?.addressPhone &&
      internalValidation
    ) {
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
            <Typography variant="body1" component="p" color="textPrimary" className={classes.step}>
              Krok 4/4
            </Typography>
            <Typography variant="h4" component="h4" className={classes.header}>
              {formHeader}
            </Typography>
            <div className={classes.inputSection}>
              <div>
                <Typography variant="h5" component="p" className={classes.subHeader}>
                  {addressSectionTitle}
                </Typography>
                {addressInputs.map(({ id, name, label }) => (
                  <div key={id} className={classes.inputContainer}>
                    <Typography variant="body1" component="p" className={classes.inputLabel}>
                      {label}
                    </Typography>
                    <div className={classes.textFieldContainer}>
                      <Field
                        name={name}
                        component={renderInput}
                        ref={addressInputsRefs.current[id]}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Typography variant="h5" component="p" className={classes.subHeader}>
                  {dateSectionTitle}
                </Typography>
                <div className={classes.inputContainer}>
                  <Typography variant="body1" component="p" className={classes.inputLabel}>
                    {dayLabel}
                  </Typography>
                  <div className={classes.textFieldContainer}>
                    <Field
                      name={dayName}
                      component={renderDateInput}
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                    {readyToValidate && !formValues?.dateDay && (  // zrobione w ten sposób, bo data domyślnie wyświetlana w inpucie nie jest widoczna w reduxFormie, dopóki user nie kliknie w input
                      <Typography component="p" className={classes.errorMsg}>
                        Wprowadź datę.
                      </Typography>
                    )}
                  </div>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body1" component="p" className={classes.inputLabel}>
                    {hourLabel}
                  </Typography>
                  <div className={classes.textFieldContainer}>
                    <Field
                      name={hourName}
                      component={renderTimeInput}
                      selectedTime={selectedTime}
                      setSelectedTime={setSelectedTime}
                    />
                    {readyToValidate && !formValues?.dateHour && (  // zrobione w ten sposób, bo godzina domyślnie wyświetlana w inpucie nie jest widoczna w reduxFormie, dopóki user nie kliknie w input
                      <Typography component="p" className={classes.errorMsg}>
                        Wprowadź godzinę.
                      </Typography>
                    )}
                  </div>
                </div>
                <div className={classes.textAreaContainer}>
                  <Typography variant="body1" component="p" className={classes.inputLabel}>
                    {textAreaLabel}
                  </Typography>
                  <Field
                    name={textAreaName}
                    component={renderTextArea}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item container className={classes.buttonSection}>
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
        <Grid item xs={false} md={1} />
      </Grid>
    </form>
  );
};

const mapState = (state) => ({
  formError: state.form.formMain.syncErrors,
  formValues: state.form.formMain.values
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