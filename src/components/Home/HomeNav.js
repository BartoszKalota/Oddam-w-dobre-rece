import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  navSection: {
    backgroundColor: theme.palette.background.paper
  },
  button: {
    textTransform: 'none',
    padding: theme.spacing(0.62, 2.5),
    fontSize: '1.1rem',
    color: theme.palette.text.primary,
    borderRadius: 0
  }
}));

const HomeNav = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.navSection}>
      <Grid item container justify="flex-end" xs={11}>
        <LinkScroll
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          style={{ display: 'flex' }}
        >
          <Button variant="outlined" className={classes.button}>
            Start
          </Button>
        </LinkScroll>
        <LinkScroll
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
          style={{ display: 'flex' }}
        >
          <Button variant="text" className={classes.button}>
            O co chodzi?
          </Button>
        </LinkScroll>
        <LinkScroll
          to="section3"
          spy={true}
          smooth={true}
          duration={500}
          style={{ display: 'flex' }}
        >
          <Button variant="text" className={classes.button}>
            O nas
          </Button>
        </LinkScroll>
        <LinkScroll
          to="section4"
          spy={true}
          smooth={true}
          duration={500}
          style={{ display: 'flex' }}
        >
          <Button variant="text" className={classes.button}>
            Fundacja i organizacje
          </Button>
        </LinkScroll>
        <LinkScroll
          to="section5"
          spy={true}
          smooth={true}
          duration={500}
          style={{ display: 'flex' }}
        >
          <Button variant="text" className={classes.button}>
            Kontakt
          </Button>
        </LinkScroll>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
 
export default HomeNav;