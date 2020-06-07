import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import decoration from '../../assets/Decoration.svg';

const useStyles = makeStyles(theme => ({
  helpSection: {
    padding: theme.spacing(9, 0, 10, 0)
  },
  decoration: {
    margin: theme.spacing(3, 0, 4, 0)
  }
}));

const HomeHelp = ({ firebaseData }) => {
  const classes = useStyles();
  console.log(firebaseData)
  return (
    <Grid item container className={classes.helpSection} id="section4">
      <Grid item container direction="column" alignItems="center">
        <Typography variant="h4" component="h3" color="textPrimary">
          Komu pomagamy?
        </Typography>
        <img src={decoration} alt="Decoration" className={classes.decoration} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  firebaseData: state.firestore.data.home_listOfOrganisations
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'home_listOfOrganisations' }
  ])
)(HomeHelp);