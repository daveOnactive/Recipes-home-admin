import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteReq } from '../../shared/Fetch';

const DeleteBtn = ({id, setReload, setShow}) => {

  const deleteRecipe = e => {
    deleteReq(`https://recipes-homes-api.herokuapp.com/api/recipe/${id}`).then(data => {
      console.log(data.$clusterTime.clusterTime);
      setShow(data.$clusterTime.clusterTime);
      setTimeout(() => setShow(false), 1200);
      setReload(true);
    });
    
  };

  return (
    <div onClick={deleteRecipe}>
      <FontAwesomeIcon
        icon='trash'
        color='red'
      />
    </div>
  );
};

export default DeleteBtn;