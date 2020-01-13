/* eslint-disable no-useless-escape */
import { useState } from 'react';
const Errors = {
  name: {
    status: false,
    message: ''
  },
  email: {
    status: false,
    message: ''
  },
  password: {
    status: false,
    message: ''
  }
};

export const useNameValidate = () => {
  const [name, setName] = useState('');
  const namePattern = /^[a-zA-Z ]{2,30}$/g;
  
  const nameChangeEvent = e => {
    if(e.target.value.length <= 6 && e.target.value !== '') {
      Errors.name.message = 'Name length can\'t be less than 6';
      Errors.name.status = true;
      setName(e.target.value);
    } else if(e.target.value.length >= 6 && !e.target.value.match(namePattern)) {
      Errors.name.message = 'Name cannot contain special charaters(*,$) or number(1,2)';
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
  return { name, nameChangeEvent, nameErrorMssg, isNameValid, setName };
};

export const useEmailValidate = () => {
  const [email, setEmail] = useState('');
  const validEmailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailChangeEvent = e => {
    if(e.target.value.length <= 6 && e.target.value !== '') {
      Errors.email.status = true;
      Errors.email.message = 'Email length can\'t be less than 6';
      setEmail(e.target.value);
    } else if(e.target.value.length >= 6 && !e.target.value.match(validEmailPattern)) {
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

  return { email, emailChangeEvent, isEmailValid, emailErrorMssg, setEmail };
};

export const usePasswordValidate = () => {
  const [password, setPassword] = useState('');
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])[a-zA-Z0-9\D]{8,}/g ;

  const passwordChangeEvent = e => {
    if(e.target.value.length <= 7 && e.target.value !== '') {
      Errors.password.message = 'Password length can\'t be less than 7';
      Errors.password.status = true;
      setPassword(e.target.value);
    } else if(e.target.value.length >= 7 && !e.target.value.match(passwordPattern)) {
      Errors.password.message = 'Password must contain atlest one uppercase and lowercase alphabet and one special character(#, $)';
      Errors.password.status = true;
      setPassword(e.target.value);
    }
    else {
      Errors.password.message = '';
      Errors.password.status = false;
      setPassword(e.target.value);
    }
  };
  const isPasswordValid = Errors.password.status;
  const passwordErrorMssg = Errors.password.message;

  return { password, passwordChangeEvent, isPasswordValid, passwordErrorMssg, setPassword };
};