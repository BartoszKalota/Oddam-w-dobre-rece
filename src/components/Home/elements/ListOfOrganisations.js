import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import clsx from 'clsx';

import SingleTabListOfOrganisations from './SingleTabListOfOrganisations';

const useStyles = makeStyles(theme => ({
  tabsSection: {
    marginBottom: theme.spacing(9)
  },
  button: {
    width: '100%',
    maxWidth: 210,
    minHeight: 80,
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
    borderRadius: 0,
    lineHeight: 1.2,
    textTransform: 'none'
  },
  activeBtn: {
    border: `1px solid ${theme.palette.text.primary}`
  }
}));

const ListOfOrganisations = ({ data }) => {
  const classes = useStyles();
  const [ tabs, setTabs ] = useState([]);
  const [ currTab, setCurrTab ] = useState(null);

  useEffect(() => {
    // Utworzenie tablicy z zakładkami
    const tabs = Object.values({ ...data });
    setTabs(tabs);
    setCurrTab(tabs[0]);
  }, []);
  
  const handleClickTab = ({ target }) => {
    // Kilknięty przycisk ustanawia bieżącą zakładkę
    const seekTabId = target.parentElement.id;
    const currTab = tabs.find(tab => tab.id === +seekTabId);
    setCurrTab(currTab);
  };

  return (
    <>
      <Grid container className={classes.tabsSection}>
        <Grid item xs={1} />
        <Grid item container xs={10} justify="space-evenly">
          {tabs.map(({ id, title }) => (
            <Button
              key={id}
              id={id}
              onClick={handleClickTab}
              variant="text"
              className={
                currTab.id === id
                  ? clsx(classes.button, classes.activeBtn)
                  : classes.button
              }
            >
              {title}
            </Button>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
      {currTab && <SingleTabListOfOrganisations currTab={currTab} />}
    </>
  );
}
 
export default ListOfOrganisations;