import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

import { fetchingFormFirstPage } from '../../config/redux/actions/fetchingFormFirstPageAction';

import FormFirstPage from './FormFirstPage';
import FormSecondPage from './FormSecondPage';
import FormThirdPage from './FormThirdPage';
import BackdropScreen from '../Home/elements/BackdropScreen';

const useStyles = makeStyles(theme => ({
  mainSection: {
    minHeight: 1005,  // gdy dane jeszcze się nie załadują, ekran ładowania i tym samym sekcja będą mieć odpowiednią wysokość
    marginBottom: theme.spacing(5)
  }
}));

const FormMain = ({ getFormData, isPending, firebaseData, firebaseError }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(prevState => prevState + 1);
  const prevPage = () => setPage(prevState => prevState - 1);
  
  // const { onSubmit } = this.props
  useEffect(() => {
    getFormData();
  }, [page]);
  // Log błędu, jeżeli się pojawi
  if (firebaseError) {
    console.error(firebaseError);
  }

  return (
    <main className={classes.mainSection}>
      {page === 1 && !isPending && firebaseData && (  // przy !firebaseError (zamiast firebaseData) wyrzuca błąd, bo wtedy renderuje komponent jeszcze przed załadowaniem danych
        <FormFirstPage
          formData={firebaseData}
          onSubmit={nextPage}
        />
      )}
      {page === 2 && !isPending && firebaseData && (
        <FormSecondPage
          prevPage={prevPage}
          onSubmit={nextPage}
        />
      )}
      {page === 3 && !isPending && firebaseData && (
        <FormThirdPage
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
  isPending: state.formMain.isFetching,
  firebaseData: state.formMain.data,
  firebaseError: state.formMain.error
});
const mapDispatch = (dispatch) => ({
  getFormData: () => dispatch(fetchingFormFirstPage())
});

export default connect(mapState, mapDispatch)(FormMain);