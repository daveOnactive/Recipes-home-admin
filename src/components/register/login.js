import React, { useContext } from 'react';
import {
  usePasswordValidate,
  useEmailValidate
} from '../../hooks/useForm';
import '../../styles/register.scss';
import { useLogin } from '../../hooks/useFetch';
import { auth } from '../authContext';
const Notify = React.lazy(() => import('../../shared/notify'));

const Login = () => {
  const { email, emailErrorMssg, emailChangeEvent, isEmailValid } = useEmailValidate();
  const { password, passwordErrorMssg, passwordChangeEvent, isPasswordValid} = usePasswordValidate();
  const { setLoginApiUrl, setLoginBody, Login } = useLogin();
  const [ setAuth ] = useContext(auth);

  const submitForm = e => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    setLoginBody(data);
    setLoginApiUrl('https://recipes-homes-api.herokuapp.com/api/user/login');
    Login().then(data => {
      // setAuth(data);
      console.log(data);
    })
  };

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