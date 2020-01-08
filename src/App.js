import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
const Home = React.lazy(() => import('./components/home/home'));
const Admin = React.lazy(() => import('./components/admin/admin'));
function App() {
  return (
    <Router>
      <nav>
        <div className="logo">
          Logo
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Signup</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route to='/' component={Home} />
          <Route to='/register' component={} />
          <Route to='/admin' component={Admin} />
        </Switch>
      </nav>
    </Router>
  )
}

export default App;
