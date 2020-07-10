import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Menu
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import AuthNavigation from './elements/AuthNavigation';

const useStyles = makeStyles(theme => ({
  navSection: isGradient => {
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: 9,
      background: isGradient 
        ? 'linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0.42) 43%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%)'
        : '#FFF',
      padding: theme.spacing(2, 0, 1.25, 0),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2, 0, 4, 0)
      }
    };
    if (!isGradient) {
      style.boxShadow = theme.shadows[5];
    }
    return style;
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
  },
  sectionMobile: {
    display: 'flex',
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingRight: 0
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    '& svg': {
      fontSize: '2.5rem'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      color: 'inherit'
    }
  }
}));

const HomeNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [isGradient, setIsGradient] = useState(true);
  const classes = useStyles(isGradient);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  useEffect(() => {
    const windowEl = window;
    const navSection = document.getElementById('section0');
    const headerSection = document.getElementById('section1');
    const threeColsSection = document.getElementById('section1+');
    // Zarządzanie rodzajem tła sekcji Nav (gradient lub jednolity kolor)
    let startUniformBgrHeight = headerSection.offsetHeight - navSection.offsetHeight;
    const toggleBgrStyle = () => {  // eventy w postaci funkcji z nazwami, aby móc potem usunąć eventy z obiektu window
      if (windowEl.pageYOffset > startUniformBgrHeight) {
        setIsGradient(false);
      } else {
        setIsGradient(true);
      }
    };
    windowEl.addEventListener('scroll', toggleBgrStyle);
    // Zarządzenie klasą 'active' dla przycisku 'Start' względem sekcji 'ThreeColumns' (drobna korekta działania react-scroll)
    let startActiveHeight = headerSection.offsetHeight;
    let finishActiveHeight = headerSection.offsetHeight + threeColsSection.offsetHeight - navSection.offsetHeight;
      // Aktualizacja wysokości sekcji w przypadku zmiany szerokości viewportu
    const updatingSectionHeight = () => {
      startActiveHeight = headerSection.offsetHeight;
      finishActiveHeight = headerSection.offsetHeight + threeColsSection.offsetHeight - navSection.offsetHeight;
    };
    windowEl.addEventListener('resize', updatingSectionHeight);
      // Określenie zakresu wysokości offsetu, w którym używana jest klasa 'active'
    const launchingActiveClass = () => {
      if (
        windowEl.pageYOffset > startActiveHeight &&
        windowEl.pageYOffset < finishActiveHeight
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    windowEl.addEventListener('scroll', launchingActiveClass);
    return () => {
      windowEl.removeEventListener('scroll', toggleBgrStyle);
      windowEl.removeEventListener('resize', updatingSectionHeight);
      windowEl.removeEventListener('scroll', launchingActiveClass);
    };
  }, []);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-menu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <LinkScroll 
          // activeClass={classes.activeBtn}
          to="section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ width: '100%' }}
          // className={isActive ? classes.activeBtn : ''}
        >
          <Button variant="text" fullWidth>
            Start
          </Button>
        </LinkScroll>
      </MenuItem>
      <MenuItem>
        <LinkScroll
          // activeClass={classes.activeBtn}
          to="section2"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          style={{ width: '100%' }}
          // className={isActive ? classes.activeBtn : ''}
        >
          <Button variant="text" fullWidth>
            O co chodzi?
          </Button>
        </LinkScroll>
      </MenuItem>
      <MenuItem>
        <LinkScroll
          // activeClass={classes.activeBtn}
          to="section3"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          style={{ width: '100%' }}
          // className={isActive ? classes.activeBtn : ''}
        >
          <Button variant="text" fullWidth>
            O nas
          </Button>
        </LinkScroll>
      </MenuItem>
      <MenuItem>
        <LinkScroll
          // activeClass={classes.activeBtn}
          to="section4"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          style={{ width: '100%' }}
          // className={isActive ? classes.activeBtn : ''}
        >
          <Button variant="text" fullWidth>
            Fundacja i organizacje
          </Button>
        </LinkScroll>
      </MenuItem>
      <MenuItem>
        <LinkScroll
          // activeClass={classes.activeBtn}
          to="section5"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          style={{ width: '100%' }}
          // className={isActive ? classes.activeBtn : ''}
        >
          <Button variant="text" fullWidth>
            Kontakt
          </Button>
        </LinkScroll>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Grid item container className={classes.navSection} id="section0">
        <AuthNavigation />
        <Grid item xs={12} style={{ marginTop: 8 }}>
          <Grid item container justify="flex-end" xs={12} sm={11}>
            <div className={classes.sectionDesktop}>
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
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
      {renderMobileMenu}
    </>
  );
}
 
export default HomeNav;