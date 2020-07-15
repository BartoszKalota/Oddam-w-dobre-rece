import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { fetchingOrganisations } from '../../config/redux/actions/fetchingOrganisationsAction'

import decoration from '../../assets/Decoration.svg';
import ListOfOrganisations from './elements/ListOfOrganisations';
import BackdropScreen from './elements/BackdropScreen';

const useStyles = makeStyles(theme => ({
  helpSection: {
    paddingTop: theme.spacing(9),
    marginBottom: theme.spacing(15),
    '& > div': {
      padding: theme.spacing(0, 2)
    }
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
        <Typography variant="h4" component="h5" align="center" color="textPrimary">
          Komu pomagamy?
        </Typography>
        <img src={decoration} alt="Decoration" className={classes.decoration} />
      </Grid>
      <Grid item container className={classes.listContainer}>
        <Grid item xs={false} sm={2} />
        <Grid item container xs={12} sm={8}>
          {!isPending && !firebaseError && <ListOfOrganisations data={firebaseData} />}
        </Grid>
        <Grid item xs={false} sm={2} />

        {/* Ekran ładowania i komunikowania o błędzie dopasowany do sekcji*/}
        <BackdropScreen
          isPending={isPending}
          firebaseError={firebaseError}
        />
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