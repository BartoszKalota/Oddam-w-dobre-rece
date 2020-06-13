import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

import {
  loginDisplayed, registerDisplayed, closeDialog,
  LOGIN_MODE, REGISTER_MODE, LOGOUT_MODE
} from '../../../config/redux/actions/dialogSwitcherAction';

import DialogLogin from './DialogLogin';
import DialogRegister from './DialogRegister';
import DialogLogout from './DialogLogout';

const useStyles = makeStyles(theme => ({
  authNavSection: {
    textTransform: 'none',
    padding: theme.spacing(0.62, 2.5),
    color: theme.palette.text.primary,
    borderRadius: 0
  }
}));

const AuthNavigation = ({
  isOpened, mode,
  loginDisplayed, registerDisplayed, closeDialog
}) => {
  const classes = useStyles();
  
  const props = { isOpened, closeDialog };
  let dialogToRender;
  if (mode === LOGIN_MODE) {
    dialogToRender = <DialogLogin {...props} registerDisplayed={registerDisplayed} />;
  }
  if (mode === REGISTER_MODE) {
    dialogToRender = <DialogRegister {...props} />;
  }
  if (mode === LOGOUT_MODE) {
    dialogToRender = <DialogLogout {...props} />;
  }

  return (
    <>
      <Grid item xs={12}>
        <Grid item container justify="flex-end" xs={11}>
          <Button
            variant="text"
            onClick={() => loginDisplayed()}
            className={classes.authNavSection}
          >
            Zaloguj
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => registerDisplayed()}
            className={classes.authNavSection}
          >
            Załóż konto
          </Button>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      {dialogToRender}
    </>
  );
};

const mapStateToProps = (state) => ({
  isOpened: state.dialogSwitcher.isOpened,
  mode: state.dialogSwitcher.mode
});
const mapDispatchToProps = (dispatch) => ({
  loginDisplayed: () => dispatch(loginDisplayed()),
  registerDisplayed: () => dispatch(registerDisplayed()),
  closeDialog: () => dispatch(closeDialog())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavigation);