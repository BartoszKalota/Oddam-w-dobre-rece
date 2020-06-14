import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import clsx from 'clsx';

import { loginDisplayed } from '../../config/redux/actions/dialogSwitcherAction';

import headerImg from '../../assets/Home-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg';

const useStyles = makeStyles(theme => ({
  headerSection: {
    height: 963,  // wysokość obrazka 'headerImage'
    backgroundColor: theme.palette.background.paper
  },
  headerImage: {
    background: `url(${headerImg}) no-repeat right/cover`
  },
  headerContent: {
    paddingRight: theme.spacing(8)
  },
  headerTitle: {
    fontSize: '2.2rem',
    lineHeight: 1.2,
    marginBottom: theme.spacing(2)
  },
  headerSubtitle: {
    marginBottom: theme.spacing(3)
  },
  buttonsSection: {
    marginTop: 45,
    '& a': {
      display: 'block'
    }
  },
  button: {
    width: '100%',
    minHeight: 120,
    fontSize: '2.2rem',
    fontWeight: 300,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    lineHeight: 1.2,
    padding: '16px 40%'
  }
}));

const HomeHeader = ({ loginDisplayed }) => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.headerSection} id="section1">
      <Grid item xs={6} className={classes.headerImage} />
      <Grid item container xs={5} alignItems="center" className={classes.headerContent}>
        <Grid item container direction="column" alignItems="center">
          <Typography
            component="h1"
            color="textPrimary"
            align="center"
            className={classes.headerTitle}
          >
            Zacznij pomagać!
          </Typography>
          <Typography
            component="h2"
            color="textPrimary"
            align="center"
            className={clsx(classes.headerTitle, classes.headerSubtitle)}
          >
            Oddaj niechciane rzeczy w zaufane ręce
          </Typography>
          <img src={decoration} alt="Decoration" />
          <Grid item container spacing={5} className={classes.buttonsSection}>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                onClick={() => loginDisplayed()}
                className={classes.button}
              >
                Oddaj rzeczy
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                onClick={() => loginDisplayed()}
                className={classes.button}
              >
                Zorganizuj zbiórkę
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginDisplayed: () => dispatch(loginDisplayed())
});

export default connect(null, mapDispatchToProps)(HomeHeader);