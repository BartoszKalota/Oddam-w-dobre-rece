import React from 'react';
import injectSheet from 'react-jss';

import { ThemeProvider } from '@material-ui/core/styles';
import theme, { globalStyle } from './config/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>App</h1>
  </ThemeProvider>
);

export default injectSheet(globalStyle)(App);