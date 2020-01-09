import { useState } from 'react';
const Errors = {
  name: {
    status: true,
    message: ''
  },
  email: {
    status: true,
    message: ''
  },
  password: {
    status: true,
    message: ''
  }
};

export const useNameValidate = () => {
  const [name, setName] = useState('');
  
  const nameChangeEvent = e => {
    if(e.target.value.length <= 3 && e.target.value !== '') {
      Errors.name.message = 'short name';
      Errors.name.status = true;
      setName(e.target.value);
    } else {
      Errors.name.message = '';
      Errors.name.status = false;
      setName(e.target.value);
    }
    
  };
  const isNameValid = Errors.name.status;
  const nameErrorMssg = Errors.name.message;
  return { name, nameChangeEvent, nameErrorMssg, isNameValid };
};

export const useEmailValidate = () => {
  const [email, setEmail] = useState('');

  const emailChangeEvent = e => {
    if(e.target.value.length <= 3 && e.target.value !== '') {
      Errors.email.status = true;
      Errors.email.message = 'Invalid Email';
      setEmail(e.target.value);
    } else {
      Errors.email.status = false;
      Errors.email.message = '';
      setEmail(e.target.value);
    }
  };
  const isEmailValid = Errors.email.status;
  const emailErrorMssg = Errors.email.message;

  return { email, emailChangeEvent, isEmailValid, emailErrorMssg };
};

export const usePasswordValidate = () => {
  const [password, setPassword] = useState('');

  const passwordChangeEvent = e => {
    if(e.target.value.length <= 3 && e.target.value !== '') {
      Errors.password.message = 'password is too weak';
      Errors.password.status = true;
      setPassword(e.target.value);
    } else {
      Errors.password.message = '';
      Errors.password.status = false;
      setPassword(e.target.value);
    }
  };
  const isPasswordValid = Errors.password.status;
  const passwordErrorMssg = Errors.password.message;

  return { password, passwordChangeEvent, isPasswordValid, passwordErrorMssg };
};