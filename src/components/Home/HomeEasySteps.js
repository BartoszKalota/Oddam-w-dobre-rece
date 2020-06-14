import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

import { loginDisplayed } from '../../config/redux/actions/dialogSwitcherAction';

import decoration from '../../assets/Decoration.svg';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';

const useStyles = makeStyles(theme => ({
  easyStepsSection: {
    padding: theme.spacing(6, 0, 10, 0)
  },
  decoration: {
    margin: theme.spacing(3, 0, 4, 0)
  },
  stepsSection: {
    backgroundColor: theme.palette.backgroundAltColor,
    padding: theme.spacing(9, 0)
  },
  singleStep: {
    maxWidth: 150
  },
  stepTitle: {
    lineHeight: 1.2,
    marginTop: theme.spacing(1)
  },
  divider: {
    width: 70,
    backgroundColor: theme.palette.dividerColor,
    margin: theme.spacing(1, 0)
  },
  stepDescr: {
    lineHeight: 1.3
  },
  button: {
    width: 310,
    minHeight: 120,
    fontSize: '2.2rem',
    fontWeight: 300,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    lineHeight: 1.2,
    padding: '16px 40%',
    marginTop: theme.spacing(4)
  }
}));

const HomeEasySteps = ({ loginDisplayed }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.easyStepsSection} id="section2">
      <Grid item container direction="column" alignItems="center">
        <Typography variant="h4" component="h3" color="textPrimary">
          Wystarczą 4 proste kroki
        </Typography>
        <img src={decoration} alt="Decoration" className={classes.decoration} />
      </Grid>
      <Grid item container className={classes.stepsSection}>
        <Grid item xs={1} />
        <Grid item container xs={10} justify="space-evenly">
          <Grid item container direction="column" alignItems="center" className={classes.singleStep}>
            <img src={icon1} alt="T-shirt icon" />
            <Typography
              variant="h6"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepTitle}
            >
              Wybierz rzeczy
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              variant="subtitle1"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepDescr}
            >
              ubrania, zabawki, sprzęt i inne
            </Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center" className={classes.singleStep}>
            <img src={icon2} alt="T-shirt icon" />
            <Typography
              variant="h6"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepTitle}
            >
              Spakuj je
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              variant="subtitle1"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepDescr}
            >
              skorzystaj z worków na śmieci
            </Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center" className={classes.singleStep}>
            <img src={icon3} alt="T-shirt icon" />
            <Typography
              variant="h6"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepTitle}
            >
              Zdecyduj komu chcesz pomóc
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              variant="subtitle1"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepDescr}
            >
              wybierz zaufane miejsce
            </Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center" className={classes.singleStep}>
            <img src={icon4} alt="T-shirt icon" />
            <Typography
              variant="h6"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepTitle}
            >
              Zamów kuriera
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              variant="subtitle1"
              component="p"
              color="textPrimary"
              align="center"
              className={classes.stepDescr}
            >
              kurier przyjedzie w dogodnym terminie
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid item container justify="center" style={{ display: 'grid' }}>
        <Button
          variant="outlined"
          onClick={() => loginDisplayed()}
          className={classes.button}
        >
          Oddaj rzeczy
        </Button>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginDisplayed: () => dispatch(loginDisplayed())
});
 
export default connect(null, mapDispatchToProps)(HomeEasySteps);