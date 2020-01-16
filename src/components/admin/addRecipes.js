import React, { useState } from 'react';

const AddRecipes = () => {
  const recipes =  { };

  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [cooking, setCooking] = useState('');
  const [direction, setDirection] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const titleInput = e => {
    setTitle(e.target.value);
  };

  const desInput = e => {
    setDes(e.target.value);
  };

  const ingreInput = e => {
    setIngredient(e.target.value);
  };

  const cookingInput = e => {
    setCooking(e.target.value);
  };

  const directionInput = e => {
    setDirection(e.target.value);
  };

  const imageInput = e => {
    setImageUrl(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    recipes.title = title;
    recipes.description = des;
    recipes.ingredients = ingredient;
    recipes.beforeCooking = cooking;
    recipes.cookingDirection = cooking;
    recipes.imageUrl = imageUrl;
    console.log(recipes)
  };

  return (
    <div>
      <form onSubmit={submitForm} className='submit-form'>
        <div>
          <label>Title</label>
          <input type='text' name='Title' value={title} onChange={titleInput} required={true}/>
        </div>
        <div>
          <label>Description</label>
          <input type='text' name='Description' value={des} onChange={desInput} required={true}/>
        </div>
        <div>
          <label>Ingredients</label>
          <textarea rows='9' cols='7' name='ingredient' value={ingredient} onChange={ingreInput} required={true}></textarea>
        </div>
        <div>
          <label>Before cooking</label>
          <textarea rows='9' cols='7' name='Before Cooking' value={cooking} onChange={cookingInput} required={true}></textarea>
        </div>
        <div>
          <label>Cooking directions</label>
          <textarea rows='9' cols='7' name='Cooking Direction' value={direction} onChange={directionInput} required={true}></textarea>
        </div>
        <div>
          <label>Image url</label>
          <input type='text' name='Image url' value={imageUrl} onChange={imageInput} required={true}/>
        </div>
        <button type='submit'>Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipes;