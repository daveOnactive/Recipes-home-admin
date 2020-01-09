import React from 'react';
import '../App.scss';

const Notify = ({status, message, type}) => {
  return (
    <div className={status ? 'toster' : 'toster hide'}>
      <div className={type === 'success' ? 'success' : 'error'}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notify;