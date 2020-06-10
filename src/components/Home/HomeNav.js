import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid
} from '@material-ui/core';

import * as ROUTES from '../../config/routes';

const useStyles = makeStyles(theme => ({
  navSection: isGradient => {
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: 9,
      background: isGradient 
        ? 'linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0.42) 43%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%)'
        : '#FFF',
      padding: theme.spacing(2, 0, 4, 0)
    };
    if (!isGradient) {
      style.boxShadow = theme.shadows[5];
    }
    return style;
  },
  authNavSection: {
    textTransform: 'none',
    padding: theme.spacing(0.62, 2.5),
    color: theme.palette.text.primary,
    borderRadius: 0
  },
  activeBtn: {
    '& > button': {
      border: `1px solid ${theme.palette.text.primary}`
    }
  },
  button: {
    textTransform: 'none',
    padding: theme.spacing(0.62, 2.5),
    fontSize: '1.1rem',
    color: theme.palette.text.primary,
    border: '1px solid rgba(0, 0, 0, 0)',  // przezroczysta ramka (bez tego, tekst przycisku lekko się podnosi, gdy otrzyma klasę active)
    borderRadius: 0
  }
}));

const AuthNavigation = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid item container justify="flex-end" xs={11}>
        <Link to={ROUTES.LOGIN} style={{ display: 'flex' }}>
          <Button variant="text" className={classes.authNavSection}>
            Zaloguj
          </Button>
        </Link>
        <Link to={ROUTES.REGISTER} style={{ display: 'flex' }}>
          <Button variant="outlined" color="primary" className={classes.authNavSection}>
            Załóż konto
          </Button>
        </Link>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

const HomeNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [isGradient, setIsGradient] = useState(true);
  const classes = useStyles(isGradient);

  useEffect(() => {
    const windowEl = window;
    const navSection = document.getElementById('section0');
    const headerSection = document.getElementById('section1');
    const threeColsSection = document.getElementById('section1+');
    // Zarządzanie rodzajem tła sekcji Nav (gradient lub jednolity kolor)
    let startUniformBgrHeight = headerSection.offsetHeight - navSection.offsetHeight;
    windowEl.addEventListener('scroll', () => {
      if (windowEl.pageYOffset > startUniformBgrHeight) {
        setIsGradient(false);
      } else {
        setIsGradient(true);
      }
    });
    // Zarządzenie klasą 'active' dla przycisku 'Start' względem sekcji 'ThreeColumns' (drobna korekta działania react-scroll)
    let startActiveHeight = headerSection.offsetHeight;
    let finishActiveHeight = headerSection.offsetHeight + threeColsSection.offsetHeight - navSection.offsetHeight;
      // Aktualizacja wysokości sekcji w przypadku zmiany szerokości viewportu
    windowEl.addEventListener('resize', () => {
      startActiveHeight = headerSection.offsetHeight;
      finishActiveHeight = headerSection.offsetHeight + threeColsSection.offsetHeight - navSection.offsetHeight;
    });
      // Określenie zakresu wysokości offsetu, w którym używana jest klasa 'active'
    windowEl.addEventListener('scroll', () => {
      if (
        windowEl.pageYOffset > startActiveHeight &&
        windowEl.pageYOffset < finishActiveHeight
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <Grid item container className={classes.navSection} id="section0">
      <AuthNavigation />
      <Grid item xs={12} style={{ marginTop: 8 }}>
        <Grid item container justify="flex-end" xs={11}>
          <LinkScroll
            activeClass={classes.activeBtn}
            to="section1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{ display: 'flex' }}
            className={isActive ? classes.activeBtn : ''}
          >
            <Button variant="text" className={classes.button}>
              Start
            </Button>
          </LinkScroll>
          <LinkScroll
            activeClass={classes.activeBtn}
            to="section2"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            style={{ display: 'flex' }}
          >
            <Button variant="text" className={classes.button}>
              O co chodzi?
            </Button>
          </LinkScroll>
          <LinkScroll
            activeClass={classes.activeBtn}
            to="section3"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            style={{ display: 'flex' }}
          >
            <Button variant="text" className={classes.button}>
              O nas
            </Button>
          </LinkScroll>
          <LinkScroll
            activeClass={classes.activeBtn}
            to="section4"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            style={{ display: 'flex' }}
          >
            <Button variant="text" className={classes.button}>
              Fundacja i organizacje
            </Button>
          </LinkScroll>
          <LinkScroll
            activeClass={classes.activeBtn}
            to="section5"
            spy={true}
            smooth={true}
            offset={-250}
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
    </Grid>
  );
}
 
export default HomeNav;