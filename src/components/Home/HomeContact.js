import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';

import bgrImg from '../../assets/Background-Contact-Form.jpg';

import HomeFooter from './HomeFooter';

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    height: 940,  // dopasowanie do wysokości sekcji z Adobe XD
    backgroundImage: `url(${bgrImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    zIndex: 0,
    '&::before': {
      content: "''",
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.8)',
      position: 'absolute',
      zIndex: 1
    }
  },
  sectionContainerOver: {
    position: 'absolute',
    zIndex: 2
  },
  contactSection: {
    top: 0
  },
  footerSection: {
    bottom: 0
  }
}));

const HomeContactAndFooter = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.sectionContainer} id="section5">
      <Grid container className={clsx(classes.sectionContainerOver, classes.contactSection)}>
        <h1>HomeContact</h1>
      </Grid>
      <Grid container justify="center" className={clsx(classes.sectionContainerOver, classes.footerSection)}>
        <HomeFooter />
      </Grid>
    </Grid>
  );
}
 
export default HomeContactAndFooter;