import React, { useContext, useState } from 'react';
import { auth } from '../authContext';
import '../../styles/admin.scss';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Admin = () => {
  const [ setAuth ] = useContext(auth);
  const [redirect, setRedirect] = useState(false);

  const logOut = e => {
    setAuth({type: 'delete', token: ''});
    setRedirect(true);
  };

  if(redirect) {
    return <Redirect to='/register' />
  }

  return (
    <main>
      <header className='header'>
        <button className='log-out-btn' onClick={logOut}>
          <span>
            <FontAwesomeIcon
              icon='power-off'
            />
          </span>
        </button>
      </header>
    </main>
  );
};

export default Admin;