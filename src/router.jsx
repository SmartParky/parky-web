// Packages
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Pages
import Register from './pages/Register/index';
import Login from './pages/Login/index';
import Homepage from './pages/Homepage/index';
import Generic404 from './pages/Generic404/index';

// Local Modules
import './index.css';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login/" component={Login} />
      <Route exact path="/register/" component={Register} />
      <Route exact path="/homepage/" component={Homepage} />
      <Route exact path='*' component={Generic404} />
    </Switch>
  </Router>
)


export default AppRouter;
