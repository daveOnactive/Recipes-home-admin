import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.scss';
import '../../styles/button.scss';

const Home = () => {
  return (
    <div className="main">
      <header>
        <h2>Welcome to recipes home admin</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, minus?</p>
      </header>
      <section>
        <div className="buttons">
          <button className="button">
            <Link to='/admin' className="link">
              Admin
            </Link>
          </button>
          <button className="button">
            <Link to='/register' className="link">
              Signup
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;