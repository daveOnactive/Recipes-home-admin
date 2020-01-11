import { useState } from 'react';

export const useSignup = () => {
  const [signupApiUrl, setSignupApiUrl] = useState();
  const [signupBody, setSignupBody] = useState();
  
  const signUp = async () => {
    try {
      const response = await fetch(signupApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupBody)
      });
      const data = await response.json();
      return data;
    } catch(err) {
      console.error(err);
    } 
  };

  return { setSignupBody, setSignupApiUrl, signUp };
};

export const useLogin = () => {
  const [loginApiUrl, setLoginApiUrl] = useState();
  const [loginBody, setLoginBody] = useState();
  
  const Login = async () => {
    try {
      const response = await fetch(loginApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginBody)
      });
      const data = await response.json();
      return data;
    } catch(err) {
      console.log(err);
    } 
  };

  return { setLoginBody, setLoginApiUrl, Login };
};