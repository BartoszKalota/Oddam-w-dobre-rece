import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  descr: {
    maxWidth: 640,
    margin: 'auto',
    marginBottom: theme.spacing(8),
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    fontSize: '1.4rem'
  }
}));

const SingleTabListOfOrganisations = ({ currTab: { descr, entity } }) => {
  const classes = useStyles();
  const [ counter, setCounter ] = useState(0);

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
      <ul>
        {entityToShow.map(({ name, descr, tags }, i) => (
          <li key={i}>
            <p>{name}</p>
            <p>{descr}</p>
            <p>{tags.join(', ')}</p>
          </li>
        ))}
      </ul>
      <div>
        {numOfPages.map(num => (
          <button
            key={num}
            onClick={handleClickPagination}
          >
            {num}
          </button>
        ))}
      </div>
    </Grid>
  );
}
 
export default SingleTabListOfOrganisations;