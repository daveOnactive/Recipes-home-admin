import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from './authContext';

const PrivateRoute = ({component : Component, ...rest}) => {
  const [ setAuth ] = useContext(auth);
  return (
    <Route {...rest} render={(props) => (
      setAuth({type: 'get', token: ''}) ? (
        <Component {...props} />
      ) : (
        <Redirect to='/register' />
      )
    )}
    />
  );
};

export default PrivateRoute;