import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthProvider from './components/authContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faExclamationCircle, faFan, faSpinner, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import PrivateRoute from './components/privateRoute';
import Loader from './shared/loader';
const Home = React.lazy(() => import('./components/home/home'));
const Admin = React.lazy(() => import('./components/admin/admin'));
const Register = React.lazy(() => import('./components/register/register'));
library.add(faCheckCircle, faExclamationCircle, faFan, faSpinner, faPowerOff);
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
        <Suspense fallback={<Loader load={true} />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/register' component={Register} type='register' />
            <PrivateRoute path='/admin' component={Admin} type='admin' />
          </Switch>
        </Suspense>
        </AuthProvider>
      </Router>
  )
}
export default App;
