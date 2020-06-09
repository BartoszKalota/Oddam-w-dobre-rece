import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contactForm: {
    width: 530
  }
}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <form container className={classes.contactForm}>
      <h1>ContactForm</h1>
    </form>
  );
}
 
export default ContactForm;