import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  usePasswordValidate,
  useEmailValidate
} from '../../hooks/useForm';
import '../../styles/register.scss';
import user from '../../shared/User';
import { auth } from '../authContext';
import { Redirect } from 'react-router';
const Notify = React.lazy(() => import('../../shared/notify'));

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMssg, setErrorMssg] = useState('');
  const { email, emailChangeEvent, isEmailValid, setEmail } = useEmailValidate();
  const { password, passwordChangeEvent, isPasswordValid, setPassword } = usePasswordValidate();
  const [load, setLoad] = useState(false);
  const [ setAuth ] = useContext(auth);

  const clearFeild = () => {
    setEmail('');
    setPassword('');
  };

  const submitForm = e => {
    e.preventDefault();
    setLoad(true);
    const data = {
      email: email,
      password: password
    };
    user('https://recipes-homes-api.herokuapp.com/api/user/login', data).then(data => {
        if(data.token) {
          setAuth({type: 'set', token: data.token});
          clearFeild();
          setTimeout(() => setRedirect(true), 500);
        } else {
          setErrorMssg(data.error);
          setErrorStatus(true);
          setTimeout(() => setErrorStatus(false), 3000);
        }
        setLoad(false);
    }).catch(err => {
      console.error(err);
    })
    
  };
  if(redirect) {
    return (
      <Redirect to='/' />
    );
  }

  return (
    <form onSubmit={submitForm}>
       <Notify status={errorStatus} message={errorMssg}type='error' />
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={emailChangeEvent} required disabled={load}/>
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" value={password} onChange={passwordChangeEvent} required disabled={load}/>
      </div>
      <button disabled={isEmailValid && isPasswordValid}>
      {!load ? 'Login' : ''}
        <span className={load ? 'spinner' : 'spinner not-loading'}>
          <FontAwesomeIcon
            icon ='spinner'
            spin = {true}
            color = '#fcc395'
          />
        </span>
      </button>
    </form>
    
  );
};

export default Login;