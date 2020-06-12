import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Backdrop,
  CircularProgress,
  Grid,
  Typography
} from '@material-ui/core';

import { fetchingOrganisations } from '../../config/redux/actions/fetchingOrganisationsAction'

import decoration from '../../assets/Decoration.svg';
import ListOfOrganisations from './elements/ListOfOrganisations';

const useStyles = makeStyles(theme => ({
  backdrop: {
    top: 'unset',
    left: 'unset',
    right: 'unset',
    bottom: 'unset',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  helpSection: {
    paddingTop: theme.spacing(9),
    marginBottom: theme.spacing(15)
  },
  decoration: {
    margin: theme.spacing(3, 0, 8, 0)
  },
  listContainer: {
    minHeight: 660, // gdy dane jeszcze się nie załadują, ekran ładowania i tym samym sekcja będą mieć odpowiednią wysokość
    position: 'relative'
  }
}));

const HomeHelp = ({ getOrganisations, isPending, firebaseError, firebaseData }) => {
  const classes = useStyles();

  useEffect(() => {
    getOrganisations(); // pobranie danych z Firebase
  }, [])
  // Log błędu, jeżeli się pojawi
  if (firebaseError) {
    console.error(firebaseError);
  }

  return (
    <Grid item container className={classes.helpSection} id="section4">
      <Grid item container direction="column" alignItems="center">
        <Typography variant="h4" component="h5" color="textPrimary">
          Komu pomagamy?
        </Typography>
        <img src={decoration} alt="Decoration" className={classes.decoration} />
      </Grid>
      <Grid item container className={classes.listContainer}>
        <Grid item xs={2} />
        <Grid item container xs={8}>
          {!isPending && !firebaseError && <ListOfOrganisations data={firebaseData} />}
        </Grid>
        <Grid item xs={2} />

        {/* Ekran ładowania i komunikowania o błędzie dopasowany do sekcji*/}
        <Backdrop className={classes.backdrop} open={!!(isPending || firebaseError)}> {/* zmienne isPending i firebaseError gdy są nieaktywne stanowią null, wtedy wykrzacza błąd w konsoli; dlatego konieczna była tu konwersja na booleana */}
          {isPending && <CircularProgress color="primary" />}
          {firebaseError && (
            <div stlye={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" component="p" style={{ color: 'red' }} gutterBottom>
                Błąd połączenia z bazą!
              </Typography>
              <Typography variant="h6" component="p" style={{ textAlign: 'center' }}>
                Log błędu jest w konsoli
              </Typography>
            </div>
          )}
        </Backdrop>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isPending: state.fetchingOrganisations.isFetching,
  firebaseData: state.fetchingOrganisations.data,
  firebaseError: state.fetchingOrganisations.error
});

const mapDispatchToProps = (dispatch) => ({
  getOrganisations: () => dispatch(fetchingOrganisations())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHelp);