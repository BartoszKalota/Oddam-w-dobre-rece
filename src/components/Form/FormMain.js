import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

import { fetchingFormMain } from '../../config/redux/actions/fetchingFormMainAction';

import FormFirstPage from './FormFirstPage';
import FormSecondPage from './FormSecondPage';
import FormThirdPage from './FormThirdPage';
import FormFourthPage from './FormFourthPage';
import FormSummaryPage from './FormSummaryPage';
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
  isPending, firebaseData, firebaseError
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(prevState => prevState + 1);
  const prevPage = () => setPage(prevState => prevState - 1);

  // const { onSubmit } = this.props
  useEffect(() => {
    getFormMainData();
  }, []);
  // Log błędu, jeżeli się pojawi
  if (firebaseError) {
    console.error(firebaseError);
  }

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
      {page === 5 && !isPending && firebaseData && (
        <FormSummaryPage
          prevPage={prevPage}
          // onSubmit={onSubmit}
        />
      )}

      {/* Ekran ładowania i komunikowania o błędzie dopasowany do sekcji*/}
      <BackdropScreen
        isPending={isPending}
        firebaseError={firebaseError}
      />
    </main>
  );
};

// FormMain.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

const mapState = (state) => ({
  isPending: state.formMainFirebase.isFetching,
  firebaseData: state.formMainFirebase.data,
  firebaseError: state.formMainFirebase.error
});
const mapDispatch = (dispatch) => ({
  getFormMainData: () => dispatch(fetchingFormMain())
});

export default connect(mapState, mapDispatch)(FormMain);