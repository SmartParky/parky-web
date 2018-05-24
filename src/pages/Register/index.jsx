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
          <RegisterForm></RegisterForm>
        </div>
      </div>
    );
  }
}
