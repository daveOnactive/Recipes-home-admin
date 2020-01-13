import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useNameValidate,
  useEmailValidate,
  usePasswordValidate
} from '../../hooks/useForm';
import user from '../../shared/User';
import '../../styles/register.scss';
const Notify = React.lazy(() => import('../../shared/notify'));

const Signup = ({login}) => {
  const { name, nameChangeEvent, nameErrorMssg, isNameValid, setName } = useNameValidate();
  const { email, emailChangeEvent, emailErrorMssg, isEmailValid, setEmail } = useEmailValidate();
  const { password, passwordChangeEvent, passwordErrorMssg, isPasswordValid, setPassword } = usePasswordValidate();

  const [cPassword, setCpassword] = useState('');
  const [errorStat, setErrorStat] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMssg, setErrorMssg] = useState('');
  const [typeOfNotify, setTypeOfNotify] = useState(null);
  const [load, setLoad] = useState(false);

  const clearFeild = () => {
    setName('');
    setEmail('');
    setPassword('');
    setCpassword('');
  };

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
        clearFeild();
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
        <Notify status={isNameValid} message={nameErrorMssg} type='error' />
        <input type="text" name="name" required value={name} onChange={nameChangeEvent} disabled={load}/>
      </div>
      <div>
        <label>Email</label>
        <Notify status={isEmailValid} message={emailErrorMssg} type='error' />
        <input type="email" name="email" value={email} onChange={emailChangeEvent} required disabled={load}/>
      </div>
      <div>
        <label>Password</label>
        <Notify status={isPasswordValid} message={passwordErrorMssg} type='error' />
        <input type="text" name="password" value={password} onChange={passwordChangeEvent} required disabled={load}/>
      </div>
      <div>
        <label>Confirm password</label>
        <Notify status={errorStat} message='password did not match' type='error' />
        <input type="text" name="c-password" value={cPassword} onChange={checkPassword} required disabled={load}/>
      </div>
      <button disabled={isNameValid && isEmailValid && isPasswordValid}>
        {!load ? 'Register' : ''}
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

export default Signup;