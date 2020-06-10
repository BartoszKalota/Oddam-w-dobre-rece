import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import bgrImg from '../../assets/Background-Contact-Form.jpg';
import decoration from '../../assets/Decoration.svg';
import ContactForm from './elements/ContactForm';
import HomeFooter from './HomeFooter';

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    marginTop: theme.spacing(5),
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
    top: 0,
    paddingTop: theme.spacing(20)
  },
  decoration: {
    margin: theme.spacing(3, 0, 9, 0)
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
        <Grid item xs={7} />
        <Grid item xs={5} container spacing={5}>
          <Grid item container direction="column" alignItems="center">
            <Typography variant="h4" component="h6" color="textPrimary">
              Skontaktuj się z nami
            </Typography>
            <img src={decoration} alt="Decoration" className={classes.decoration} />
          </Grid>
          <Grid item container justify="center">
            <ContactForm />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={clsx(classes.sectionContainerOver, classes.footerSection)}>
        <HomeFooter />
      </Grid>
    </Grid>
  );
}
 
export default HomeContactAndFooter;