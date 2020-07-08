import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Grid, Typography } from '@material-ui/core';
import { reduxForm } from 'redux-form';

import bgrImg from '../../assets/Background-Form.jpg';
import tShirtImg from '../../assets/Icon-1.svg';
import recyclingImg from '../../assets/Icon-4.svg';

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    height: 830,  // wysokość obrazka w tle
    background: `url(${bgrImg}) no-repeat right/cover`
  },
  header: {
    fontWeight: 600,
    marginTop: theme.spacing(8.75),
    marginBottom: theme.spacing(5)
  },
  subHeader: {
    fontWeight: 600
  },
  mainDivText: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2.5),
    '& p': {
      width: '50vw',
      fontSize: '1.5rem'
    }
  },
  imgStyle: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(2.5)
  },
  dataSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(6),
    '& > div': {
      marginRight: theme.spacing(10)
    }
  },
  rowContainer: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center'
  },
  rowTitle: {
    width: 112,
    color: '#000',
    fontSize: '1.5rem',
    fontWeight: 300,
    lineHeight: 1.1,
    marginRight: theme.spacing(2)
  },
  rowContent: {
    color: '#000',
    fontSize: '1.5rem',
    fontWeight: 300,
    lineHeight: 1.1
  },
  button: {
    minWidth: 244,
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
    minWidth: 180,
    marginRight: theme.spacing(6.25)
  }
}));

const FormSummaryPage = ({
  formValues: {
    bagsNumber, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
    toggleBtn1, toggleBtn2, toggleBtn3, toggleBtn4, toggleBtn5,
    certainOrganisation, addressStreet, addressCity, addressCode, addressPhone,
    dateDay, dateHour, dateComment, location
  },
  prevPage, nextPage, onSubmit,
  isPending, firebaseError
}) => {
  const classes = useStyles();

  let wordEndingBagsNum = bagsNumber === 1 ? 'ek' : 'ki';
  if (bagsNumber > 4) {
    wordEndingBagsNum = 'ków';
  }

  const checkboxes = [];
  checkbox1 && checkboxes.push('ubrania, które nadają się do ponownego użycia');
  checkbox2 && checkboxes.push('ubrania do wyrzucenia');
  checkbox3 && checkboxes.push('zabawki');
  checkbox4 && checkboxes.push('książki');
  checkbox5 && checkboxes.push('Inne');
  const checkboxesList = checkboxes.join(', ');

  const toggleBtns = [];
  toggleBtn1 && toggleBtns.push('dzieciom');
  toggleBtn2 && toggleBtns.push('samotnym matkom');
  toggleBtn3 && toggleBtns.push('bezdomnym');
  toggleBtn4 && toggleBtns.push('niepełnosprawnym');
  toggleBtn5 && toggleBtns.push('osobom starszym');
  const toggleBtnsList = toggleBtns.join(', ');

  const certainOrganisationName = certainOrganisation
    ? `, organizacja: ${certainOrganisation}`
    : '';

  const addressData = [];
  addressStreet && addressData.push({
    label: 'Ulica',
    content: addressStreet
  });
  addressCity && addressData.push({
    label: 'Miasto',
    content: addressCity
  });
  addressCode && addressData.push({
    label: 'Kod pocztowy',
    content: addressCode
  });
  addressPhone && addressData.push({
    label: 'Numer telefonu',
    content: addressPhone
  });
  
  const dateData = [];
  dateDay && dateData.push({
    label: 'Data',
    content: dateDay.replace('/', '.').replace('/', '.')
  });
  dateHour && dateData.push({
    label: 'Godzina',
    content: dateHour
  });
  dateComment
    ? dateData.push({ label: 'Uwagi dla kuriera', content: dateComment })
    : dateData.push({ label: 'Uwagi dla kuriera', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    !isPending && !firebaseError && nextPage();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.sectionContainer}>
        <Grid item xs={1} />
        <Grid item container xs={10} direction="column" justify="space-between">
          <Grid item container direction="column" alignItems="flex-start">
            <Typography variant="h4" component="h4" className={classes.header}>
              Podsumowanie Twojej darowizny
            </Typography>
            <div>
              <Typography variant="h5" component="p" className={classes.subHeader}>
                Oddajesz:
              </Typography>
              <div className={classes.mainDivText}>
                <img src={tShirtImg} alt="t-shirt" className={classes.imgStyle} />
                <Typography variant="body1" component="p">
                  {bagsNumber} wor{wordEndingBagsNum}, {checkboxesList}, {toggleBtnsList}
                </Typography>
              </div>
              <div className={classes.mainDivText}>
                <img src={recyclingImg} alt="recycling" className={classes.imgStyle} />
                <Typography variant="body1" component="p">
                  dla lokalizacji: {location} {certainOrganisationName}
                </Typography>
              </div>
              <div className={classes.dataSection}>
                <div>
                  <Typography variant="h5" component="p" className={classes.subHeader}>
                    Adres odbioru:
                  </Typography>
                  {addressData.map(({ label, content }, i) => (
                    <div key={i} className={classes.rowContainer}>
                      <Typography variant="body1" component="p" className={classes.rowTitle}>
                        {label}
                      </Typography>
                      <Typography variant="body1" component="p" className={classes.rowContent}>
                        {content}
                      </Typography>
                    </div>
                  ))}
                </div>
                <div>
                  <Typography variant="h5" component="p" className={classes.subHeader}>
                    Termin odbioru:
                  </Typography>
                  {dateData.map(({ label, content }, i) => (
                    <div key={i} className={classes.rowContainer}>
                      <Typography variant="body1" component="p" className={classes.rowTitle}>
                        {label}
                      </Typography>
                      <Typography variant="body1" component="p" className={classes.rowContent}>
                        {content}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              Potwierdzam
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </form>
  );
};

const mapState = (state) => ({
  formValues: state.form.formMain.values,
  isPending: state.formMainFirebase.isFetching,
  firebaseError: state.formMainFirebase.error
});

export default compose(
  reduxForm({
    form: 'formMain',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  }),
  connect(mapState)
)(FormSummaryPage);