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
          <div className="col-md-6">
            <LoginForm></LoginForm>
          </div>
          <div className="col-md-6">
            <img className="bg-item" src="/images/bg.png"/>
            <img className="logo-item" src="/images/logo.png"/>
            <p className="logo-text"><span>Kolay</span>Otopark</p>
          </div>
        </div>
      </div>
    );
  }
}
