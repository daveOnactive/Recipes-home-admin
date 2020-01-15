import React, { useState } from 'react';
import DeleteBtn from './deleteBtn';
import Notify from '../../shared/notify';

const RecipeList = ({recipes, setReload}) => {
  const [show, setShow] = useState(false);
  return (
    <div className='recipe'>
      <Notify status={show} message={'Recipe Removed'} type='success' />
      <h3>Total Recipes: {recipes ? recipes.length : ''}</h3>
      <section className='recipe-list'>
      <ul>
        {recipes ? recipes.map(items => (
          <li key={items._id}>
            <div className='img'>
              <img src={items.imageUrl} alt='recipe' />
            </div>
            {items.title}
            <span className='dlt-btn'>
              <DeleteBtn id={items._id} setReload={setReload} setShow={setShow}/>
            </span>
          </li>
        )) : ''}
      </ul>
    </section>
    </div>
    
  );
};

export default RecipeList;