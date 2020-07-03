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
import { ToggleButton } from '@material-ui/lab';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import bgrImg from '../../assets/Background-Form.jpg';
import ImportantBar from './elements/ImportantBar';
import { useEffect } from 'react';

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
  toggleBtnsSection: {
    width: 680
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
    }
  },
  dropdownStyle: {
    transform: ['translateY(15px)', '!important'],
    backgroundColor: theme.palette.dropdownMenuBgr,
    color: '#000',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    '& li': {
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    '& li:first-of-type': {
      display: 'none'
    }
  }
});

const FormControlWithoutStyles = ({ classes, input, options }) => (
  <FormControl variant="outlined" className={classes.root}>
    <Select
      {...input}
      displayEmpty
      IconComponent={KeyboardArrowDownRoundedIcon}
      MenuProps={{
        classes: { paper: classes.dropdownStyle },
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

const CssToggleButton = withStyles(theme => ({
  root: {
    padding: theme.spacing(0.5, 3),
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
    textTransform: 'none',
    fontSize: '1.5rem',
    fontWeight: 300,
    color: '#000',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0
  }
}))(ToggleButton);

const FormThirdPage = ({
  formData: {
    importantTitle, importantDescr, formHeader,
    selectName, selectOptions, toggleBtnsTitle, toggleBtns, inputName, inputTitle
  },
  formError,
  onSubmit, prevPage
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(() => {
    const obj = {};
    toggleBtns.forEach(({ name }) => {
      obj[name] = false;
    });
    return obj;
  });
  const [readyToValidate, setReadyToValidate] = useState(false);

  const renderToggleBtn = ({ input, label }) => (
    <CssToggleButton
      {...input}
      checked={selected[input.name]}
      value={input.checked ? true : false}
      selected={selected[input.name]}
      onChange={input.onChange} // żeby reduxForm zarejestrował kliknięcie
      onClick={handleToggleBtnChange}
      // onClick={handleToggleBtnChange} // żeby zmienić state i wygląd przycisku
      // onChange={(e) => {
      //   input.onChange();
      //   handleToggleBtnChange(e);
      // }}
    >
      {label}
    </CssToggleButton>
  );
  
  const handleToggleBtnChange = (e) => {
    const name = e.target.parentElement.name;
    setSelected(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadyToValidate(true);
    // if (!formError?.bagsNumber) {
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
              Krok 3/4
            </Typography>
            <Typography variant="h4" component="h4" className={classes.header}>
              {formHeader}
            </Typography>
            <div>
              <Field
                name={selectName}
                component={renderSelect}
                options={selectOptions}
              />
              <Typography variant="h5" component="p" className={classes.subHeader}>
                {toggleBtnsTitle}
              </Typography>
              <div className={classes.toggleBtnsSection}>
                {toggleBtns.map(({ id, name, label }) => (
                  <Field
                    name={name}
                    component={renderToggleBtn}
                    label={label}
                    key={id}
                  />
                ))}
              </div>
            </div>
            {/* {readyToValidate && formError && (
              <Typography component="p" className={classes.errorMsg}>
                {formError.bagsNumber}
              </Typography>
            )} */}
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
)(FormThirdPage);