import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import injectSheet from 'react-jss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme, { globalStyle } from './config/theme';

import * as ROUTES from './config/routes';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Form from './components/Form';
import NotFound from './components/NotFound';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.REGISTER} component={Register} />
        <Route path={ROUTES.LOGOUT} component={Logout} />
        <Route path={ROUTES.FORM} component={Form} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default injectSheet(globalStyle)(App);