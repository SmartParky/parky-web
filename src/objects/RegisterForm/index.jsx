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
            <div className="col-xs-12">
              <h5>PARKY</h5>
              <h3 className="easy"><span>Kayıt</span> ol</h3>
            </div>
            <div className="col-xs-12">
              <div className="name-input">
              <input
                type="text" id=""
                className="city-box" name="Name"
                placeholder="name"/>
              </div>
              <div className="city-input">
              <input
                type="text" id=""
                className="city-box" name="City"
                placeholder="city"/>
              </div>
              <div className="email-input">
              <input
                type="text" id=""
                className="email-box" name="Email address"
                placeholder="email adress"/>
              </div>
              <div className="password-input">
              <input
                type="text" id=""
                className="password" name="password"
                placeholder="Password"/>
              </div>
            </div>
            <div className="col-xs-12">
                <button className="contunie-button" type="contunie-button"><p>Contunie</p></button>
                <button className="sign-up-button" type="sign-up-button"><p>Sign Up</p></button>
            </div>
            <div className="col-md-12">
              <p className="footer-top">By signing up,you agree to PARKY</p>
              <p className="footer-bottom">Terms and Conditions<span>& </span>Privacy Policy</p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
