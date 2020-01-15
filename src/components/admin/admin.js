import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../authContext';
import '../../styles/admin.scss';
import { Redirect } from 'react-router';
import { getReq } from '../../shared/Fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../../shared/loader';
import RecipeList from './recipeList';
import AddRecipes from './addRecipes';

const Admin = () => {
  const [ setAuth ] = useContext(auth);
  const [redirect, setRedirect] = useState(false);
  const [load, setLoad] = useState(false);
  const [user, setUSer] = useState('');
  const [showBtn, setShowBtn] = useState(true);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [addRecipe, setAddRecipe] = useState(false);
  const [reload, setReload] = useState(null);

  useEffect(() => {
    const id = setAuth({type: 'get-id', token: ''});
    setLoad(true);
    getReq(`https://recipes-homes-api.herokuapp.com/api/user/${id}`).then(data => {
      setUSer(data);
      setLoad(false);
    });
  }, []);

  useEffect(() => {
    getReq('https://recipes-homes-api.herokuapp.com/api/recipe').then(data => {
      setRecipes(data);
    })
  }, [reload]);

  const logOut = e => {
    setAuth({type: 'delete', token: ''});
    setRedirect(true);
  };

  const recipeBtn = e => {
    setShowRecipe(true);
    setShowBtn(false);
  };

  const addRecipeBtn = e => {
    setAddRecipe(true);
    setShowBtn(false);
  };

  const cancelBtn = e => {
    if(showRecipe) {
      setShowRecipe(false);
      setShowBtn(true);
    } else if(addRecipe) {
      setAddRecipe(false);
      setShowBtn(true);
    }
  }

  if(redirect) {
    return <Redirect to='/register' />
  }

  if(load) {
    return <Loader load={load} />
  }

  return (
    <main>
      <header className='header'>
        <h3>
          User: {user.name}
        </h3>
        <button type='button' className='log-out-btn' onClick={logOut}>
          <span>
            <FontAwesomeIcon
              icon='power-off'
            />
          </span>
        </button>
      </header>
      {!showBtn ? <div className='close-btn' onClick={cancelBtn}>
        <FontAwesomeIcon
          icon='chevron-circle-left'
          size='2x'
        />
      </div> : ''}
      {showBtn ? <section className='admin-btns'>
        <button onClick={recipeBtn}>
          Show Recipes
          <span>
            <FontAwesomeIcon
              icon='eye'
            />
          </span>
        </button>
        <button onClick={addRecipeBtn}>
          Add Recipes
          <span>
            <FontAwesomeIcon
              icon='plus-circle'
            />
          </span>
        </button>
      </section> : ''}
      {showRecipe ? <RecipeList recipes={recipes} setReload={setReload} /> : ''}
      {addRecipe ? <AddRecipes /> : ''}
    </main>
  );
};

export default Admin;