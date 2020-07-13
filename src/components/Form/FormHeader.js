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
    height: 'unset',
    backgroundColor: theme.palette.background.paper,
    flexWrap: 'wrap-reverse',
    [theme.breakpoints.up('md')]: {
      height: 853,  // wysokość obrazka 'headerImage'
      flexWrap: 'wrap'
    }
  },
  headerImage: {
    height: 500,
    background: `url(${headerImg}) no-repeat center/cover`,
    [theme.breakpoints.up('md')]: {
      height: 'unset',
      background: `url(${headerImg}) no-repeat right/cover`
    }
  },
  headerContent: {
    height: 740,
    alignItems: 'flex-end',
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up('sm')]: {
      height: 565
    },
    '@media (max-width:631px)': {
      height: 760
    },
    '@media (max-width:492px)': {
      height: 790
    },
    '@media (max-width:426px)': {
      height: 845
    },
    '@media (max-width:381px)': { // poniżej stylu dla max-width:390px ze względu na przesłanianie
      height: 895
    },
    '@media (max-width: 331px)': {
      height: 1215,
      '& h1': {
        fontSize: '2rem'
      }
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
  headerContainer: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
      padding: 0
    }
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
    maxWidth: 620,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}));

const FormHeader = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.headerSection} id="section1">
      <Grid item xs={12} md={4} lg={6} className={classes.headerImage} />
      <Grid item container xs={12} md={8} lg={5} alignItems="center" className={classes.headerContent}>
        <Grid item container direction="column" alignItems="center" className={classes.headerContainer}>
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
      <Grid item xs={false} lg={1} />
    </Grid>
  );
};
 
export default FormHeader;