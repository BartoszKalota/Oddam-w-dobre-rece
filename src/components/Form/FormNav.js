import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import { logoutUser } from '../../config/redux/actions/fetchingUserAction';

import * as ROUTES from '../../config/routes';

const useStyles = makeStyles(theme => ({
  navSection: isGradient => {
    const style= {
      position: 'fixed',
      top: 0,
      zIndex: 9,
      background: isGradient
        ? 'linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0.42) 43%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%)'
        : '#FFF',
      padding: theme.spacing(2, 0, 4, 0)
    };
    if (!isGradient) {
      style.boxShadow = theme.shadows[5];
    }
    return style;
  },
  userText: {
    fontSize: '0.9rem',
    lineHeight: 2.5,
    marginRight: 20
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
    <Grid item container className={classes.navSection} id="section0">
      <Grid item container justify="flex-end" xs={11}>
        <Typography variant="body1" component="p" className={classes.userText}>
          {`Cześć ${userEmail}!`}
        </Typography>
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
      </Grid>
      <Grid item xs={1} />
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