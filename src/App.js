import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthProvider from './components/authContext';
import './App.scss';
import PrivateRoute from './components/privateRoute';
const Home = React.lazy(() => import('./components/home/home'));
const Admin = React.lazy(() => import('./components/admin/admin'));
const Register = React.lazy(() => import('./components/register/register'));
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
                <Link to='/admin' className="link">Admin</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route to='/register' component={Register} />
            <PrivateRoute path='/admin' component={Admin} />
          </Switch>
        </Suspense>
        </AuthProvider>
      </Router>
  )
}
export default App;
