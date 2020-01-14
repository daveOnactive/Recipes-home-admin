import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../authContext';
import '../../styles/admin.scss';
import { Redirect } from 'react-router';
import { getSingleUSer } from '../../shared/Fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Admin = () => {
  const [ setAuth ] = useContext(auth);
  const [redirect, setRedirect] = useState(false);
  const [user, setUSer] = useState('');

  useEffect(() => {
    const id = setAuth({type: 'get-id', token: ''});
    getSingleUSer(`https://recipes-homes-api.herokuapp.com/api/user/${id}`).then(data => setUSer(data));
  }, []);

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
        <h3>
          User: {user.name}
        </h3>
        <button type='button' className='log-out-btn' onClick={logOut}>
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