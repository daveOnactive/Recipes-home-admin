import React from 'react';

export const auth = React.createContext();
const AuthProvider = (props) => {

  const setAuth = (data) => {
    switch(data.type) {
      case 'get' :
        return localStorage.getItem('token');
      case 'set' :
        localStorage.setItem('token', data.token);
        break;
      case 'delete' :
        localStorage.clear();
        break;
      default:
        return data;
    }
  }

  return (
    <auth.Provider value={[setAuth]}>
      { props.children }
    </auth.Provider>
  );
};

export default AuthProvider;