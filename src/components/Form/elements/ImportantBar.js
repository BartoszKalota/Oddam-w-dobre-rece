import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  importantBarSection: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8)
    },
    [theme.breakpoints.up('md')]: {
      padding: 0
    }
  },
  title: {
    fontWeight: 600,
    marginTop: theme.spacing(6.25),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  descr: {
    fontSize: '1.4rem',
    lineHeight: 1.3,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.25),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  }
}));

const ImportantBar = ({ importantTitle, importantDescr }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.importantBarSection}>
      <Grid item xs={false} md={1} />
      <Grid item container xs={12} md={10} direction="column">
        <Grid item container xs={12} md={10} direction="column">
          <Typography variant="h4" component="h3" className={classes.title}>
            {importantTitle}
          </Typography>
          <Typography variant="body1" component="p" color="textPrimary" className={classes.descr}>
            {importantDescr}
          </Typography>
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
      <Grid item xs={false} md={1} />
    </Grid>
  );
};

export default ImportantBar;