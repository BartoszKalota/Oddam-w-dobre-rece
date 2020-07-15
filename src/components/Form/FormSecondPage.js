import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Button,
  Grid,
  FormControl,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import bgrImg from '../../assets/Background-Form.jpg';
import ImportantBar from './elements/ImportantBar';

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    height: 830,  // wysokość obrazka w tle
    background: `url(${bgrImg}) no-repeat left/cover`,
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
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    textShadow: '2px 2px 3px #FFF',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  selectContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  selectTitle: {
    fontWeight: 300,
    fontSize: '1.5rem',
    marginBottom: theme.spacing(3),
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 0,
      marginRight: theme.spacing(3)
    }
  },
  errorMsg: {
    color: theme.palette.error.main,
    fontSize: '1.1rem',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(28.25)
  },
  buttonSection: {
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    padding: theme.spacing(0, 2),
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

const selectStyles = (theme) => ({
  root: {
    minWidth: 300,
    '& .MuiSelect-root': {
      height: 50,
      border: `1px solid ${theme.palette.text.primary}`,
      borderRadius: 0,
      padding: `0 0 0 ${theme.spacing(2)}px`,
      display: 'flex',
      alignItems: 'center',
      fontWeight: 300,
      fontSize: '1.5rem'
    },
    '& fieldset': {
      borderRadius: 0
    },
    '& svg': {
      fontSize: '4rem',
      color: '#000',
      top: 'calc(50% - 31px)',
      right: 0
    },
    '@media (max-width:400px)': {
      minWidth: 245
    }
  },
  dropdownStyle: {
    minWidth: ['90px', '!important'],
    transform: ['translateY(15px)', '!important'],
    backgroundColor: theme.palette.dropdownMenuBgr,
    color: '#000',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    '& li': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.6rem',
      fontWeight: 300,
    },
    '& li:first-of-type': {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'transparent'
    }
  }
});

// Konieczna była taka konwencja użycia withStyles dla FormControl,
// aby classes były dostępne z propsów i żeby jedną z klas przekazać
// jako MenuProps w celu stylowania wysuwanego menu
const FormControlWithoutStyles = ({ classes, input, options }) => (
  <FormControl variant="outlined" className={classes.root}>
    <Select
      {...input}
      displayEmpty
      IconComponent={KeyboardArrowDownRoundedIcon}
      MenuProps={{ 
        classes: { paper: classes.dropdownStyle },  // w celu nadania odpowiednich styli
        // Odtąd w dół: zablokowanie pozycji wysuwanego menu
        // (żeby usunąć efekt, w którym przy ponownym wybieraniu opcji,
        // opcja poprzednia znajduje się na wysokości rubryki select)
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        getContentAnchorEl: null
      }}
    >
      <MenuItem value="">— wybierz —</MenuItem>
      {options.map(option => (
        <MenuItem value={option} key={option}>{option}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

const CssFormControl = withStyles(selectStyles)(FormControlWithoutStyles);

const renderSelect = ({ input, options }) => (
  <CssFormControl input={input} options={options} />
);

const FormSecondPage = ({
  formData: {
    importantTitle, importantDescr, formHeader, selectName, selectTitle, selectOptions
  },
  formError,
  onSubmit, prevPage
}) => {
  const classes = useStyles();
  const [readyToValidate, setReadyToValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadyToValidate(true);
    if (!formError?.bagsNumber) {
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
              Krok 2/4
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              className={classes.header}
            >
              {formHeader}
            </Typography>
            <div className={classes.selectContainer}>
              <Typography
                variant="body1"
                component="p"
                className={classes.selectTitle}
              >
                {selectTitle}
              </Typography>
              <Field
                name={selectName}
                component={renderSelect}
                options={selectOptions}
              />
            </div>
            {readyToValidate && formError && (
              <Typography component="p" className={classes.errorMsg}>
                {formError.bagsNumber}
              </Typography>
            )}
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
)(FormSecondPage);