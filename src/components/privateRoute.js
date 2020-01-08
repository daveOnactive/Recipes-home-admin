import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from './authContext';

const PrivateRoute = ({component : Component, ...rest}) => {
  const isAuth = useContext(auth);
  return (
    <Route {...rest} render={(props) => (
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
    )}
    />
  );
};

export default PrivateRoute;