import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as ROUTES from '../routes';

const withAuthorization = (Component) => {
  const WithAuthorization = ({ authUser, ownProps }) => {
    useEffect(() => {
      if (!authUser) {
        ownProps.history.push(ROUTES.HOME);
      }
    }, []);
    return (
      authUser && <Component {...ownProps} />
    );
  };

  const mapState = (state, ownProps) => ({
    authUser: state.user.userEmail,
    ownProps
  });

  return connect(mapState)(WithAuthorization);
};

export default withAuthorization;