import React from 'react';
import '../../styles/register.scss';

const Signup = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" />
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