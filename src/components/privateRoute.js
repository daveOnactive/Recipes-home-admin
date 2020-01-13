import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from './authContext';

const PrivateRoute = ({component : Component, type, ...rest}) => {
  const [ setAuth ] = useContext(auth);
  if(type === 'admin') {
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
  }
  if(type === 'register') {
    return (
      <Route {...rest} render={(props) => (
        !setAuth({type: 'get', token: ''}) ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      )}
      />
    )
  }
};

export default PrivateRoute;