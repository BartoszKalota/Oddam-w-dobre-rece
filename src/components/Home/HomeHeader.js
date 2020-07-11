import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import clsx from 'clsx';

import { loginDisplayed } from '../../config/redux/actions/dialogSwitcherAction';
import * as ROUTES from '../../config/routes';

import headerImg from '../../assets/Home-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg';

const useStyles = makeStyles(theme => ({
  headerSection: {
    height: 'unset',
    backgroundColor: theme.palette.background.paper,
    flexWrap: 'wrap-reverse',
    [theme.breakpoints.up('md')]: {
      height: 963,  // wysokość obrazka 'headerImage'
      flexWrap: 'wrap'
    }
  },
  headerImage: {
    height: 655,
    background: `url(${headerImg}) no-repeat right/cover`,
    [theme.breakpoints.up('md')]: {
      height: 'unset'
    }
  },
  headerContent: {
    height: 710,
    alignItems: 'flex-end',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    '@media (max-width:390px)': {
      height: 755
    },
    '@media (max-width:320px)': { // poniżej stylu dla max-width:390px ze względu na przesłanianie
      height: 830
    },
    [theme.breakpoints.up('sm')]: {
      height: 540
    },
    [theme.breakpoints.up('md')]: {
      height: 'unset',
      alignItems: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8),
      paddingLeft: 0
    }
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

const HomeHeader = ({ loggedIn, loginDisplayed }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    loggedIn ? history.push(ROUTES.FORM) : loginDisplayed();
  };

  return (
    <Grid item container className={classes.headerSection} id="section1">
      <Grid item xs={12} md={5} lg={6} className={classes.headerImage} />
      <Grid item container xs={12} md={6} lg={5} alignItems="center" className={classes.headerContent}>
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
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                onClick={handleClick}
                className={classes.button}
              >
                Oddaj rzeczy
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                onClick={handleClick}
                className={classes.button}
              >
                Zorganizuj zbiórkę
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={false} md={1} />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.user.userEmail
});
const mapDispatchToProps = (dispatch) => ({
  loginDisplayed: () => dispatch(loginDisplayed())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);