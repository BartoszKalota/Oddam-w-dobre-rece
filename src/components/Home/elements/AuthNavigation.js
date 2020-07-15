import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  loginDisplayed, registerDisplayed, closeDialog,
  LOGIN_MODE, REGISTER_MODE, LOGOUT_MODE
} from '../../../config/redux/actions/dialogSwitcherAction';
import { logoutUser } from '../../../config/redux/actions/fetchingUserAction';

import LoggedOutNavigation from './LoggedOutNavigation';
import LoggedInNavigation from './LoggedInNavigation';
import DialogLogin from './DialogLogin';
import DialogRegister from './DialogRegister';
import DialogLogout from './DialogLogout';

const useStyles = makeStyles(theme => ({
  authMenuContainer: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 0
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: 0
    }
  }
}));

const AuthNavigation = ({
  isOpened, mode,
  loginDisplayed, registerDisplayed, closeDialog,
  loggedInUserEmail,
  logout
}) => {
  const classes = useStyles();

  const props = { isOpened, closeDialog };
  let dialogToRender;
  if (mode === LOGIN_MODE) {
    dialogToRender = <DialogLogin {...props} registerDisplayed={registerDisplayed} />;
  }
  if (mode === REGISTER_MODE) {
    dialogToRender = <DialogRegister {...props} loginDisplayed={loginDisplayed} />;
  }
  if (mode === LOGOUT_MODE) {
    dialogToRender = <DialogLogout {...props} />;
  }

  return (
    <>
      <Grid item xs={12}>
        <Grid item container justify="flex-end" xs={12} md={11} className={classes.authMenuContainer}>
          {loggedInUserEmail ? (
            <LoggedInNavigation
              userEmail={loggedInUserEmail}
              logout={logout}
            />
          ) : (
            <LoggedOutNavigation
              loginDisplayed={loginDisplayed}
              registerDisplayed={registerDisplayed}
            />
          )}
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>

      {dialogToRender}
    </>
  );
};

const mapStateToProps = (state) => ({
  isOpened: state.dialogSwitcher.isOpened,
  mode: state.dialogSwitcher.mode,
  loggedInUserEmail: state.user.userEmail
});
const mapDispatchToProps = (dispatch) => ({
  loginDisplayed: () => dispatch(loginDisplayed()),
  registerDisplayed: () => dispatch(registerDisplayed()),
  closeDialog: () => dispatch(closeDialog()),
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavigation);