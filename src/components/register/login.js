import React from 'react';
import '../../styles/register.scss';

const Login = () => {
  return (
    <form>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" />
      </div>
      <button>
        Login
      </button>
    </form>
  );
};

export default Login;