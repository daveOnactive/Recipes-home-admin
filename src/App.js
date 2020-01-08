import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthProvider from './components/authContext';
import './App.scss';
import PrivateRoute from './components/privateRoute';
const Home = React.lazy(() => import('./components/home/home'));
const Admin = React.lazy(() => import('./components/admin/admin'));
function App() {
  return (
      <Router>
        <AuthProvider>
        <nav>
          <div className="logo">
            <p>Logo</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to='/' className="link">Home</Link>
              </li>
              <li>
                <Link to='/register' className="link">Signup</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route to='/register' component={} /> */}
            <PrivateRoute path='/admin' component={Admin} />
          </Switch>
        </Suspense>
        </AuthProvider>
      </Router>
  )
}

export default App;
