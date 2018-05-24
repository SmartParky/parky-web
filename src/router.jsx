// Packages
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Pages
import Login from './pages/Login/index';
import Generic404 from './pages/Generic404/index';
import Register from './pages/Register/index';

// Local Modules
import './index.css';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login/" component={Login} />
      <Route exact path='*' component={Generic404} />
      <Route exact path="/register/" component={Register} />
    </Switch>
  </Router>
)


export default AppRouter;
