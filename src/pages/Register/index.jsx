// Packages
import React from 'react';

// Objects
import RegisterForm from '../../objects/RegisterForm/index';

// Local Modules
import './index.css';

export default class Register extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row registerPage">
          <div className="col-md-6">
            <RegisterForm></RegisterForm>
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
