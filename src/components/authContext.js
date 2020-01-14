import React from 'react';

export const auth = React.createContext();
const AuthProvider = (props) => {

  const setAuth = (data) => {
    switch (data.type) {
      case 'get-token':
        if (localStorage.getItem('userData')) {
          const token = localStorage.getItem('userData');
          return JSON.parse(token).token;
        }
        break;
      case 'get-id':
        if (localStorage.getItem('userData')) {
          const id = localStorage.getItem('userData');
          return JSON.parse(id).userId;
        }
        break;
      case 'set':
        localStorage.setItem('userData', JSON.stringify(data.userData));
        break;
      case 'delete':
        localStorage.clear();
        break;
      default:
        return data;
    }
  }

  return (
    <auth.Provider value={[setAuth]}>
      {props.children}
    </auth.Provider>
  );
};

export default AuthProvider;