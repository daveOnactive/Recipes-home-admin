import React, { useState } from 'react';

export const auth = React.createContext(['', () => {}]);
const AuthProvider = (props) => {
  const [authState, setAuthState] = useState(localStorage.getItem('token'));

  const setAuth = (data) => {
    localStorage.setItem('token', data);
    setAuthState(data);
  }

  return (
    <auth.Provider value={[authState, setAuth]}>
      { props.children }
    </auth.Provider>
  );
};

export default AuthProvider;