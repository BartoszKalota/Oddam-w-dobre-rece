import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import decoration from '../../assets/Decoration.svg';
import peopleImg from '../../assets/People.jpg';
import signature from '../../assets/Signature.svg';

const useStyles = makeStyles(theme => ({
  aboutSection: {
    height: 935, // wysokość obrazka 'peopleImg'
    backgroundColor: theme.palette.backgroundAltColor
  },
  aboutTextContainer: {
    padding: theme.spacing(0, 3)
  },
  decoration: {
    margin: theme.spacing(3, 0, 5, 0)
  },
  aboutDescr: {
    maxWidth: 540,
    position: 'relative',
    '& > p': {
      lineHeight: 2,
      marginBottom: theme.spacing(4.5)
    }
  },
  signature: {
    position: 'absolute',
    right: 0
  },
  aboutImage: {
    background: `url(${peopleImg}) no-repeat left/cover`
  }
}));

const HomeAbout = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.aboutSection} id="section3">
      <Grid
        item container xs={6}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.aboutTextContainer}
      >
        <Typography variant="h4" component="h4" color="textPrimary">
          O nas
        </Typography>
        <img src={decoration} alt="Decoration" className={classes.decoration} />
        <div className={classes.aboutDescr}>
          <Typography
            variant="h5"
            component="p"
            align="center"
            color="textPrimary"
          >
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
          </Typography>
          <img src={signature} alt="Signature" className={classes.signature} />
        </div>
      </Grid>
      <Grid item container xs={6} className={classes.aboutImage} />
    </Grid>
  );
}
 
export default HomeAbout;