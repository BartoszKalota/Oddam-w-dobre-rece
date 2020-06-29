import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  backdrop: {
    top: 'unset',
    left: 'unset',
    right: 'unset',
    bottom: 'unset',
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
});

const BackdropScreen = ({ isPending, firebaseError }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={!!(isPending || firebaseError)}> {/* zmienne isPending i firebaseError gdy są nieaktywne stanowią null, wtedy wykrzacza błąd w konsoli; dlatego konieczna była tu konwersja na booleana */}
      {isPending && <CircularProgress color="primary" />}
      {firebaseError && (
        <div stlye={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" component="p" style={{ color: 'red' }} gutterBottom>
            Błąd połączenia z bazą!
          </Typography>
          <Typography variant="h6" component="p" style={{ textAlign: 'center' }}>
            Log błędu jest w konsoli
          </Typography>
        </div>
      )}
    </Backdrop>
  );
}
 
export default BackdropScreen;