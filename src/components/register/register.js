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
        <div className="sign-in" ref={loginRef}>
          <header>
            <h2>Login</h2>
          </header>
          <Login />
          <p>Don't have an account <button onClick={signUp}>sigup</button></p>
        </div>
        <div className="sign-up" ref={signUpRef}>
          <header>
            <h2>Signup</h2>
          </header>
          <Signup />
          <p>Already have an account <button onClick={login}>login</button></p>
        </div>
      </div>
    </main>
  );
};

export default Register;