import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { fetchingFormMain } from '../../config/redux/actions/fetchingFormMainAction';
import { sendFormMain } from '../../config/redux/actions/sendFormMainAction';

import FormFirstPage from './FormFirstPage';
import FormSecondPage from './FormSecondPage';
import FormThirdPage from './FormThirdPage';
import FormFourthPage from './FormFourthPage';
import FormSummaryPage from './FormSummaryPage';
import FormSentPage from './FormSentPage';
import BackdropScreen from '../Home/elements/BackdropScreen';

const useStyles = makeStyles(theme => ({
  mainSection: {
    minHeight: 1005,  // gdy dane jeszcze się nie załadują, ekran ładowania i tym samym sekcja będą mieć odpowiednią wysokość
    marginBottom: theme.spacing(5),
    position: 'relative'
  }
}));

const FormMain = ({
  getFormMainData,
  isPending, firebaseData, firebaseError,
  sendFilledFormMain
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(prevState => prevState + 1);
  const prevPage = () => setPage(prevState => prevState - 1);

  useEffect(() => {
    getFormMainData();
  }, []);
  // Log błędu, jeżeli się pojawi
  if (firebaseError) {
    console.error(firebaseError);
  }

  const onSubmit = () => {
    sendFilledFormMain();
  };

  return (
    <main className={classes.mainSection}>
      {page === 1 && !isPending && firebaseData && (  // przy !firebaseError (zamiast firebaseData) wyrzuca błąd, bo wtedy renderuje komponent jeszcze przed załadowaniem danych
        <FormFirstPage
          formData={firebaseData.firstPage}
          onSubmit={nextPage}
        />
      )}
      {page === 2 && !isPending && firebaseData && (
        <FormSecondPage
          formData={firebaseData.secondPage}
          prevPage={prevPage}
          onSubmit={nextPage}
        />
      )}
      {page === 3 && !isPending && firebaseData && (
        <FormThirdPage
          formData={firebaseData.thirdPage}
          prevPage={prevPage}
          onSubmit={nextPage}
        />
      )}
      {page === 4 && !isPending && firebaseData && (
        <FormFourthPage
          formData={firebaseData.fourthPage}
          prevPage={prevPage}
          onSubmit={nextPage}
        />
      )}
      {page === 5 && !isPending && (
        <FormSummaryPage
          prevPage={prevPage}
          nextPage={nextPage}
          onSubmit={onSubmit}
        />
      )}
      {page === 6 && !isPending && (
        <FormSentPage />
      )}

      {/* Ekran ładowania i komunikowania o błędzie dopasowany do sekcji*/}
      <BackdropScreen
        isPending={isPending}
        firebaseError={firebaseError}
      />
    </main>
  );
};

const mapState = (state) => ({
  isPending: state.formMainFirebase.isFetching,
  firebaseData: state.formMainFirebase.data,
  firebaseError: state.formMainFirebase.error
});
const mapDispatch = (dispatch) => ({
  getFormMainData: () => dispatch(fetchingFormMain()),
  sendFilledFormMain: () => dispatch(sendFormMain())
});

export default connect(mapState, mapDispatch)(FormMain);