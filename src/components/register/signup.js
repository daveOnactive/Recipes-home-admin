import React from 'react';
import { useNameValidate, useEmailValidate, usePasswordValidate } from '../../hooks/useForm';
import '../../styles/register.scss';
import Notify from '../../shared/notify';

const Signup = () => {
  const  { name, nameChangeEvent, nameErrorMssg, isNameValid } = useNameValidate();
  const { email, emailChangeEvent, emailErrorMssg, isEmailValid } = useEmailValidate();
  const { password, passwordChangeEvent, passwordErrorMssg, isPasswordValid } = usePasswordValidate();

  return (
    <form>
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
        <input type="text" />
      </div>
      <button>
        Register
      </button>
    </form>
  );
};

export default Signup;