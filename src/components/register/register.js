/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import '../../styles/register.scss';
import Signup from './signup';
import Login from './login';

const Register = () => {
  const loginRef = useRef(null);
  const signUpRef = useRef(null);
  const [swap, setSwap] = useState(false);
  const [show, setShow] = useState(true);

  const login = e => {
    // signUpRef.current.style.visibility = 'hidden';
    // loginRef.current.style.visibility = 'visible';
    setShow(true)
  };

  const signUp = e => {
    // signUpRef.current.style.transform = 'scale(1)';
    // loginRef.current.style.visibility = 'hidden';
    setShow(false)
  };

  if(swap) {
    signUpRef.current.style.visibility = 'hidden';
    loginRef.current.style.visibility = 'visible';
  }

  return (
    <main>
      <div className="wrapper">
        <div className={show ? 'sign-in' : 'hidden sign-in'} ref={loginRef}>
          <header>
            <h2>Login</h2>
          </header>
          <Login />
          <p>Don't have an account <a href='#' onClick={signUp}>sigup</a></p>
        </div>
        <div className={show ? 'hidden sign-up' : 'sign-up'} ref={signUpRef}>
          <header>
            <h2>Signup</h2>
          </header>
          <Signup login={setSwap} />
          <p>Already have an account <a href='#' onClick={login}>login</a></p>
        </div>
      </div>
    </main>
  );
};

export default Register;