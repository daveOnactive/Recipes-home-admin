import React, { useContext, useState } from 'react';
import {
  usePasswordValidate,
  useEmailValidate
} from '../../hooks/useForm';
import '../../styles/register.scss';
import { user } from '../../shared/User';
import { auth } from '../authContext';
import { Redirect } from 'react-router';
const Notify = React.lazy(() => import('../../shared/notify'));

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const { email, emailErrorMssg, emailChangeEvent, isEmailValid } = useEmailValidate();
  const { password, passwordErrorMssg, passwordChangeEvent, isPasswordValid} = usePasswordValidate();
  const [ setAuth ] = useContext(auth);

  const submitForm = e => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    user('https://recipes-homes-api.herokuapp.com/api/user/login', data).then(data => {
      setAuth({type: 'set', token: data});
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setRedirect(true);
    })
  };

  if(redirect) {
    return (
      <Redirect to='/admin' />
    );
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={emailChangeEvent} required/>
        <Notify status={isEmailValid} message={emailErrorMssg} type='error' />
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" value={password} onChange={passwordChangeEvent} required/>
        <Notify status={isPasswordValid} message={passwordErrorMssg} type='error' />
      </div>
      <button disabled={isEmailValid && isPasswordValid}>
        Login
      </button>
    </form>
  );
};

export default Login;