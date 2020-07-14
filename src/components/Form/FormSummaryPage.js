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
  header: {
    width: '100%',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: theme.spacing(8.75),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  subHeader: {
    fontWeight: 600,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  mainDivText: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(2.5),
    '& p': {
      width: '100%',
      textAlign: 'center',
      fontSize: '1.5rem',
      [theme.breakpoints.up('sm')]: {
        textAlign: 'left'
      },
      [theme.breakpoints.up('md')]: {
        width: '50vw'
      }
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  imgStyle: {
    width: 50,
    height: 50,
    marginBottom: theme.spacing(2),
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 0,
      marginRight: theme.spacing(2.5)
    }
  },
  dataSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    '& > div': {
      width: '100%',
      marginTop: theme.spacing(6),
      marginRight: 0,
      [theme.breakpoints.up('sm')]: {
        width: 'unset',
        marginRight: theme.spacing(10)
      }
    }
  },
  rowContainer: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  rowTitle: {
    width: 'unset',
    minWidth: 112,
    color: '#000',
    fontSize: '1.5rem',
    fontWeight: 300,
    lineHeight: 1.1,
    textAlign: 'center',
    marginRight: 0,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width: 112,
      textAlign: 'left',
      marginRight: theme.spacing(2),
      marginBottom: 0
    }
  },
  rowContent: {
    color: '#000',
    fontSize: '1.5rem',
    textShadow: '2px 2px 2px #FFF',
    textAlign: 'center',
    fontWeight: 300,
    lineHeight: 1.1,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
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
      minWidth: 244
    }
  },
  buttonBack: {
    minWidth: '100%',
    marginRight: theme.spacing(6.25),
    [theme.breakpoints.up('sm')]: {
      minWidth: 180
    }
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
        <Grid item xs={false} md={1} />
        <Grid item container xs={12} md={10} direction="column" justify="space-between">
          <Grid item container direction="column" alignItems="flex-start" className={classes.contentContainer}>
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
              Potwierdzam
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={false} md={1} />
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