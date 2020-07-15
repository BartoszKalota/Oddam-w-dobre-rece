import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import bgrImg from '../../assets/3-Columns-Background.png';

const useStyles = makeStyles(theme => ({
  threeColumnsSection: {
    backgroundImage: `url(${bgrImg})`,
    padding: theme.spacing(10, 2),
  },
  singleColumn: {
    width: '100%',
    maxWidth: 'unset',
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      width: '30%',
      maxWidth: 355,
      paddingBottom: 0
    },
    '&:last-of-type': {
      paddingBottom: 0
    }
  },
  titleNumber: {
    lineHeight: 0.8,
    marginBottom: theme.spacing(3.5)
  },
  titleText: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2.5)
  },
  description: {
    fontWeight: 300
  }
}));

const HomeThreeColumns = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.threeColumnsSection} id="section1+">
      <Grid item xs={false} md={1} />
      <Grid item container xs={12} md={10} justify="space-between">
        <Grid item container direction="column" alignItems="center" className={classes.singleColumn}>
          <Typography
            variant="h1"
            component="p"
            color="textSecondary"
            align="center"
            className={classes.titleNumber}
          >
            10
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="textPrimary"
            align="center"
            className={classes.titleText}
          >
            Oddanych worków
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="textPrimary"
            align="center"
            className={classes.description}
          >
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center" className={classes.singleColumn}>
          <Typography
            variant="h1"
            component="p"
            color="textSecondary"
            align="center"
            className={classes.titleNumber}
          >
            5
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="textPrimary"
            align="center"
            className={classes.titleText}
          >
            Wspartych organizacji
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="textPrimary"
            align="center"
            className={classes.description}
          >
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center" className={classes.singleColumn}>
          <Typography
            variant="h1"
            component="p"
            color="textSecondary"
            align="center"
            className={classes.titleNumber}
          >
            7
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="textPrimary"
            align="center"
            className={classes.titleText}
          >
            Zorganizowanych zbiórek
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="textPrimary"
            align="center"
            className={classes.description}
          >
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={false} md={1} />
    </Grid>
  );
}
 
export default HomeThreeColumns;