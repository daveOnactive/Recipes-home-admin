import React, { useState } from 'react';
import { 
  useNameValidate, 
  useEmailValidate, 
  usePasswordValidate 
} from '../../hooks/useForm';
import '../../styles/register.scss';
const Notify = React.lazy(() => import('../../shared/notify'));

const Signup = () => {
  const  { name, nameChangeEvent, nameErrorMssg, isNameValid } = useNameValidate();
  const { email, emailChangeEvent, emailErrorMssg, isEmailValid } = useEmailValidate();
  const { password, passwordChangeEvent, passwordErrorMssg, isPasswordValid } = usePasswordValidate();

  const [cPassword, setCpassword] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);

  const checkPassword = e => {
    if(e.target.value !== password && e.target.value.lenght !== 0) {
      setErrorStatus(true);
      setCpassword(e.target.value);
    } else {
      setCpassword(e.target.value);
      setErrorStatus(false);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password
    };

  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Name</label>
        <input type="text" name="name" required value={name} onChange={nameChangeEvent} />
        <Notify status={isNameValid} message={nameErrorMssg} type='error' />
      </div>
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
      <div>
        <label>Confirm password</label>
        <input type="text" name="c-password" value={cPassword} onChange={checkPassword} required/>
        <Notify status={errorStatus} message= 'password did not match' type='error' />
      </div>
      <button disabled={isNameValid && isEmailValid && isPasswordValid}>
        Register
      </button>
    </form>
  );
};

export default Signup;