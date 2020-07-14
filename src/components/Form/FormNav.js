import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import { logoutUser } from '../../config/redux/actions/fetchingUserAction';

import * as ROUTES from '../../config/routes';

const useStyles = makeStyles(theme => ({
  navSection: isGradient => {
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: 9,
      padding: theme.spacing(2, 0, 1.25, 0),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2, 0, 4, 0)
      }
    };
    if (!isGradient) {
      style.background = '#FFF';
      style.boxShadow = theme.shadows[5];
    }
    return style;
  },
  navSectionGradientHandlingClass: {  // obsługa gradientu w osobnej klasie, bo gdy ten kod był w klasie wyżej, działało niepoprawnie
    background: '#FFF',
    boxShadow: theme.shadows[5],
    '& > div': {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 22%, rgba(255,255,255,0.42) 29%, rgba(255,255,255,1) 36%, rgba(255,255,255,1) 100%);',
      boxShadow: 'unset',
      '& > div': {
        paddingRight: 0,
        paddingLeft: 0
      }
    },
    [theme.breakpoints.up('lg')]: {
      background: 'linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0.42) 43%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%)'
    }
  },
  userText: {
    fontSize: '0.9rem',
    lineHeight: 2.5,
    marginRight: 20
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  mainBtn: {
    textTransform: 'none',
    borderRadius: 0,
    fontSize: '0.9rem',
    color: '#000',
    padding: theme.spacing(0.62, 1),
  },
  button: {
    textTransform: 'none',
    borderRadius: 0,
    fontSize: '0.9rem',
    padding: theme.spacing(0.62, 2.5),
    color: theme.palette.fontColorInferior
  }
}));

const FormNav = ({ userEmail, logout }) => {
  const [isGradient, setIsGradient] = useState(true);
  const history = useHistory();
  const classes = useStyles(isGradient);

  useEffect(() => {
    const windowEl = window;
    const navSection = document.getElementById('section0');
    const headerSection = document.getElementById('section1');
    // Autoprzewijanie do góry po przejściu na bieżącą podstronę
    windowEl.scrollTo(0, 0);
    // Zarządzanie rodzajem tła sekcji Nav (gradient lub jednolity kolor)
    let startUniformBgrHeight = headerSection.offsetHeight - navSection.offsetHeight;
    const toggleBgrStyle = () => {  // event w postaci funkcji z nazwą, aby móc usunąć event z obiektu window
      if (windowEl.pageYOffset > startUniformBgrHeight) {
        setIsGradient(false);
      } else {
        setIsGradient(true);
      }
    };
    windowEl.addEventListener('scroll', toggleBgrStyle);
    return () => windowEl.removeEventListener('scroll', toggleBgrStyle);
  }, []);

  const handleClick = () => {
    logout();
    history.push(ROUTES.HOME);
  };
  
  return (
    <Grid item container className={clsx(classes.navSection, classes.navSectionGradientHandlingClass)} id="section0">
      <Grid item container justify="flex-end" xs={12} md={11}>
        <Typography variant="body1" component="p" className={classes.userText}>
          {`Cześć ${userEmail}!`}
        </Typography>
        <div className={classes.buttonsContainer}>
          <Link to={ROUTES.HOME}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.mainBtn}
            >
              Powrót na stronę główną
            </Button>
          </Link>
          <Button
            variant="text"
            onClick={handleClick}
            className={classes.button}
          >
            Wyloguj
          </Button>
        </div>
      </Grid>
      <Grid item xs={false} md={1} />
    </Grid>
  );
};

const mapState = (state) => ({
  userEmail: state.user.userEmail
});
const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logoutUser())
});
 
export default connect(mapState, mapDispatch)(FormNav);