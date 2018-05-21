// Packages
import React from 'react';

// Objects
import LoginForm from '../../objects/LoginForm/index';

// Local Modules
import './index.css';

export default class Login extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row loginPage">
          <LoginForm></LoginForm>
        </div>
      </div>
    );
  }
}
