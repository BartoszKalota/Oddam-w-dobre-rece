import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Box
} from '@material-ui/core';
import clsx from 'clsx';

import headerImg from '../../assets/Form-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg';

import StepSquare from './elements/StepSquare';

const useStyles = makeStyles(theme => ({
  headerSection: {
    height: 853,  // wysokość obrazka 'headerImage'
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
    lineHeight: 1.5,
    marginBottom: theme.spacing(2)
  },
  headerSubtitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
    fontWeight: 300
  },
  squareBox: {
    width: 620
  }
}));

const FormHeader = () => {
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
            Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
          </Typography>
          <img src={decoration} alt="Decoration" />
          <Typography
            component="h2"
            color="textPrimary"
            align="center"
            className={clsx(classes.headerTitle, classes.headerSubtitle)}
          >
            Wystarczą 4 proste kroki:
          </Typography>
          <Box component="div" className={classes.squareBox}>
            <StepSquare num={1} descr="Wybierz rzeczy" />
            <StepSquare num={2} descr="Spakuj je w worki" />
            <StepSquare num={3} descr="Wybierz fundację" />
            <StepSquare num={4} descr="Zamów kuriera" />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
 
export default FormHeader;