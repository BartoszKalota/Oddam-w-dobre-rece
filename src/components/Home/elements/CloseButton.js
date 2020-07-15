import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const CloseButton = ({ onClickProp }) => {
  const classes = useStyles();
  return (
    <IconButton aria-label="close" onClick={() => onClickProp()} className={classes.closeButton}>
      <CloseIcon />
    </IconButton>
  );
}
 
export default CloseButton;