import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  stepSquare: {
    width: 120,
    height: 120,
    display: 'inline-block',
    border: `1px solid ${theme.palette.text.primary}`,
    transform: 'rotate(45deg)',
    margin: '0 14px'
  },
  stepText: {
    height: '100%',
    transform: 'rotate(-45deg)'
  },
  stepTextNum: {
    fontWeight: 300,
    fontSize: '2rem'
  },
  stepTextDescr: {
    fontWeight: 300,
    fontSize: '1.4rem',
    lineHeight: 1.2
  }
}));

const StepSquare = ({ num, descr }) => {
  const classes = useStyles();
  return (
    <div className={classes.stepSquare}>
      <div className={classes.stepText}>
        <Typography
          component="p"
          align="center"
          color="textPrimary"
          className={classes.stepTextNum}
        >
          {num}
        </Typography>
        <Typography
          component="p"
          align="center"
          color="textPrimary"
          className={classes.stepTextDescr}
        >
          {descr}
        </Typography>
      </div>
    </div>
  );
};
 
export default StepSquare;