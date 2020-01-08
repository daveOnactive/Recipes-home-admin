import React from 'react';

export const auth = React.createContext();
const AuthProvider = (props) => {
  const authSate = false;
  return (
    <auth.Provider value={authSate}>
      { props.children }
    </auth.Provider>
  );
};

export default AuthProvider;