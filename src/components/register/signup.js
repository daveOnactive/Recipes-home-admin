import React, { useState } from 'react';
import {
  useNameValidate,
  useEmailValidate,
  usePasswordValidate
} from '../../hooks/useForm';
import user from '../../shared/User';
import Loader from '../../shared/loader';
import '../../styles/register.scss';
const Notify = React.lazy(() => import('../../shared/notify'));

const Signup = ({login}) => {
  const { name, nameChangeEvent, nameErrorMssg, isNameValid } = useNameValidate();
  const { email, emailChangeEvent, emailErrorMssg, isEmailValid } = useEmailValidate();
  const { password, passwordChangeEvent, passwordErrorMssg, isPasswordValid } = usePasswordValidate();

  const [cPassword, setCpassword] = useState('');
  const [errorStat, setErrorStat] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMssg, setErrorMssg] = useState('');
  const [typeOfNotify, setTypeOfNotify] = useState(null);
  const [load, setLoad] = useState(false);

  const checkPassword = e => {
    if (e.target.value !== password && e.target.value.lenght !== 0) {
      setErrorStat(true);
      setCpassword(e.target.value);
    } else {
      setCpassword(e.target.value);
      setErrorStat(false);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    setLoad(true);
    const data = {
      name: name,
      email: email,
      password: password
    };
  user('https://recipes-homes-api.herokuapp.com/api/user/register', data).then(result => {
    // console.log(result);
      if (result.user) {
        setErrorMssg('Registration successful');
        setErrorStatus(true);
        setTypeOfNotify('success');
        setTimeout(() => setErrorStatus(false), 3000);
        setTimeout(() => login(true), 1500);
      } else {
        setErrorMssg('Email already exit');
        setErrorStatus(true);
        setTypeOfNotify('error');
        setTimeout(() => setErrorStatus(false), 3000);
      }
      setLoad(false);
  })
  };

  return (
    <form onSubmit={submitForm}>
      <Notify status={errorStatus} message={errorMssg} type={typeOfNotify} />
      <div>
        <label>Name</label>
        <input type="text" name="name" required value={name} onChange={nameChangeEvent} />
        <Notify status={isNameValid} message={nameErrorMssg} type='error' />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={emailChangeEvent} required />
        <Notify status={isEmailValid} message={emailErrorMssg} type='error' />
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" value={password} onChange={passwordChangeEvent} required />
        <Notify status={isPasswordValid} message={passwordErrorMssg} type='error' />
      </div>
      <div>
        <label>Confirm password</label>
        <input type="text" name="c-password" value={cPassword} onChange={checkPassword} required />
        <Notify status={errorStat} message='password did not match' type='error' />
      </div>
      <button disabled={isNameValid && isEmailValid && isPasswordValid}>
        Register
      </button>
      {load ? <Loader load={load} /> : ''}
    </form>
  );
};

export default Signup;