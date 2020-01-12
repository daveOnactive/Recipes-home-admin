import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Notify = ({status, message, type}) => {
  return (
    <div className={status ? 'toster' : 'toster hide'}>
      <div className={type === 'success' ? 'success' : 'error'}>
      <p>{message}<span>{type === 'success' ? <FontAwesomeIcon 
        icon="check-circle"
        color =  "#fff" 
      /> : 
      <FontAwesomeIcon
        icon="exclamation-circle"
        color = "#fff"
      />}
      </span>
      </p>
      </div>
    </div>
  );
};

export default Notify;