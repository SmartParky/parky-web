// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class RegisterForm extends React.Component {
  render() {
    return(
      <form>
        <div className="container">
          <div className="row register">
            <div classname="col-xs-12">
              <h6>PARKY</h6>
              <h3><span>Kayıt</span>ol</h3>
            </div>
            <div classname="col-xs-12">
              <div classname="name-input">
              <input
                type="text" id=""
                className="city-box" name="Name"
                placeholder="name"/>
              </div>
              <div classname="city-input">
              <input
                type="text" id=""
                className="city-box" name="City"
                placeholder="city"/>
              </div>
              <div classname="email-input">
              <input
                type="text" id=""
                className="email-box" name="Email address"
                placeholder="email adress"/>
              </div>
              <div classname="password-input">
              <input
                type="text" id=""
                className="password" name="password"
                placeholder="Password"/>
              </div>
            </div>
            <div classname="col-xs-12">
              <div classname="col-xs-6">
                <button type="contunie-button">Contunie</button>
              </div>
              <div classname="col-xs-6">
                <button type="sign-up-button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
