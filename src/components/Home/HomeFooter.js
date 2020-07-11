import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography } from '@material-ui/core';

import fbIcon from '../../assets/Facebook.svg';
import instIcon from '../../assets/Instagram.svg';

const useStyles = makeStyles(theme => ({
  footerContainerBis: {
    position: 'relative',
    marginBottom: theme.spacing(2),
    flexWrap: 'wrap-reverse',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'unset'
    }
  },
  footerText: {
    width: '100%',
    lineHeight: 2.3, // cel: wyśrodkowanie tekstu względem ikonek
    position: 'unset',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute'
    }
  },
  section: {
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingRight: 0
    }
  },
  icon: {
    marginLeft: theme.spacing(2),
    '& a': {
      display: 'flex',
      alignItems: 'center'
    }
  }
}));

const HomeFooter = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.footerContainerBis}>
      <Typography
        variant="body1"
        component="p"
        align="center"
        className={classes.footerText}
      >
        Copyright by Coders Lab
      </Typography>
      <Grid item xs={12} md={11} container justify="flex-end" className={classes.section}>
        <IconButton size="small" className={classes.icon}>
          <a href="https://www.facebook.com/">
            <img src={fbIcon} alt="Facebook" />
          </a>
        </IconButton>
        <IconButton size="small" className={classes.icon}>
          <a href="https://www.instagram.com/">
            <img src={instIcon} alt="Instagram" />
          </a>
        </IconButton>
      </Grid>
      <Grid item xs={false} md={1} />
    </Grid>
  );
}
 
export default HomeFooter;