import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  importantBarSection: {
    backgroundColor: theme.palette.primary.main
  },
  title: {
    fontWeight: 600,
    marginTop: theme.spacing(6.25)
  },
  descr: {
    fontSize: '1.4rem',
    marginBottom: theme.spacing(6.25)
  }
}));

const ImportantBar = ({ importantTitle, importantDescr }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.importantBarSection}>
      <Grid item xs={1} />
      <Grid item container xs={10} direction="column">
        <Typography variant="h4" component="h3" className={classes.title}>
          {importantTitle}
        </Typography>
        <Typography variant="body1" component="p" color="textPrimary" className={classes.descr}>
          {importantDescr}
        </Typography>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default ImportantBar;