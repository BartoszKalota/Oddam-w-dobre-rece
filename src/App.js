import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import injectSheet from 'react-jss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme, { globalStyle } from './config/theme';

import withAuthorization from './config/session/withAuthorization';
import * as ROUTES from './config/routes';
import Home from './components/Home';
import Form from './components/Form';
import NotFound from './components/NotFound';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.FORM} component={withAuthorization(Form)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default injectSheet(globalStyle)(App);