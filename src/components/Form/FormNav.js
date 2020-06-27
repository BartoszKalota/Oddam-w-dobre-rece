import React from 'react';
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
  navSection: {
    position: 'fixed',
    top: 0,
    zIndex: 9,
    background: 'linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0.42) 43%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%)',
    padding: theme.spacing(2, 0, 4, 0)
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
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    logout();
    history.push(ROUTES.HOME);
  }
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