import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  descr: {
    maxWidth: 640,
    margin: 'auto',
    marginBottom: theme.spacing(6),
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    fontSize: '1.4rem'
  },
  entityListContainer: {
    minHeight: 315,
    marginBottom: theme.spacing(3)
  },
  entityContainer: {
    padding: theme.spacing(3, 0)
  },
  entityName: {
    fontWeight: 300,
    fontFamily: theme.palette.fontFamilyAlt
  },
  divider: {
    width: '100%',
    backgroundColor: theme.palette.dividerColor
  },
  pageBtn: {
    minWidth: 40,
    minHeight: 50,
    fontSize: '1.2rem',
    color: theme.palette.text.primary,
    borderRadius: 0,
    margin: theme.spacing(0, 1)
  },
  activePageBtn: {
    border: `1px solid ${theme.palette.text.primary}`
  }
}));

const SingleTabListOfOrganisations = ({ currTab: { descr, entity } }) => {
  const classes = useStyles();
  const [ counter, setCounter ] = useState(0); // musi być wyjściowo 0 ze względu na entityToShow

  const itemsPerPage = 3;
  const entityToShow = entity.slice(counter * itemsPerPage, (counter + 1) * itemsPerPage);
  const numOfPages = [];
  for (let i = 1; i <= Math.ceil(entity.length / itemsPerPage); i++) {
    numOfPages.push(i);
  }
  
  const handleClickPagination = ({ target }) => {
    setCounter(target.innerText - 1);
  };

  useEffect(() => setCounter(0), [descr]);  // po kliknięciu w inną zakładkę (zmiana descr), wyświetla się pierwsza strona (domyślna wartość counter)

  return (
    <Grid container direction="column">
      <Typography component="div" align="center" className={classes.descr}>
        {descr}
      </Typography>
      <Grid container direction="column" className={classes.entityListContainer}>
        {entityToShow.map(({ name, descr, tags }, i) => (
          <Fragment key={i}>
            <Grid item container xs={12} spacing={3} className={classes.entityContainer}>
              <Grid item xs={7}>
                <Typography variant="h5" component="p" color="textPrimary" className={classes.entityName}>
                  {name}
                </Typography>
                <Typography variant="body1" component="p" color="textPrimary">
                  {descr}
                </Typography>
              </Grid>
              <Grid item container xs={5} justify="flex-end" alignItems="center">
                <Typography variant="body1" component="p" align="right" color="textPrimary">
                  {tags.join(', ')}
                </Typography>
              </Grid>
            </Grid>
            {/* Usunięcie ostatniego dividera */}
            {i !== (entityToShow.length - 1) && <Divider className={classes.divider} />}
          </Fragment>
        ))}
      </Grid>
      <Grid container justify="center">
        {numOfPages.length > 1 && numOfPages.map((num) => (
          <Button
            key={num}
            onClick={handleClickPagination}
            variant="text"
            size="small"
            className={
              (counter + 1) === num
                ? clsx(classes.pageBtn, classes.activePageBtn)
                : classes.pageBtn
            }
          >
            {num}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}
 
export default SingleTabListOfOrganisations;