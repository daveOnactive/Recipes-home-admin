import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.scss';

const Loader = ({load}) => {
  if(load) {
    return (
      <div className="loader">
        <FontAwesomeIcon
          icon="fan"
          spin = {true}
          color= "#6F5D5D"
          size = "2x"
        />
      </div>
    )
  }
};

export default Loader;