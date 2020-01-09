import React from 'react';
import {
  usePasswordValidate,
  useEmailValidate
} from '../../hooks/useForm';
import '../../styles/register.scss';
const Notify = React.lazy(() => import('../../shared/notify'));

const Login = () => {
  const { email, emailErrorMssg, emailChangeEvent, isEmailValid } = useEmailValidate();
  const { password, passwordErrorMssg, passwordChangeEvent, isPasswordValid} = usePasswordValidate();

  return (
    <form>
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
      <button>
        Login
      </button>
    </form>
  );
};

export default Login;