import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import clsx from 'clsx';

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
  }
}));

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.headerSection}>
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
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}

export default HomeHeader;