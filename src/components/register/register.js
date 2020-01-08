import React, { useRef } from 'react';
import '../../styles/register.scss';
import Signup from './signup';
import Login from './login';

const Register = () => {
  const loginRef = useRef(null);
  const signUpRef = useRef(null);

  const login = e => {
    signUpRef.current.style.visibility = 'hidden';
    loginRef.current.style.visibility = 'visible';
  };

  const signUp = e => {
    signUpRef.current.style.visibility = 'visible';
    loginRef.current.style.visibility = 'hidden';
  };

  return (
    <main>
      <div className="wrapper">
        <div className="sign-up" ref={signUpRef}>
          <Signup />
          <p>Already have an account <button onClick={login}>login</button></p>
        </div>
        <div className="sign-in" ref={loginRef}>
          <Login />
          <p>Don't have an account <button onClick={signUp}>sigup</button></p>
        </div>
      </div>
    </main>
  );
};

export default Register;