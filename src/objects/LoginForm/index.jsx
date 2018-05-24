// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class LoginForm extends React.Component {
  render() {
    return(
      <form id="id_login_form">
        <div className="row info">
          <div className="col-xs-12">
            <h5 className="parky-header">PARKY</h5>
            <p className="first-text"><span>OTOPARK</span>bulmanın</p>
            <p className="second-text">Kolay yolu.</p>
            <p className="info-text">PRKY size en uygun ve en yakın otoparkı bularak işinizi kolaylaştırmayı hedefleyen bir uygulamadır.Bu uygulama ile otopark bulma telaşından kurtulacaksınız.</p>
          </div>
          <div classname="col-xs-12">
            <input
              type="text" id=""
              className="email_address" name="email_address"
              placeholder="Email Adress"/>
          </div>
          <div classname="col-xs-12">
            <input
              type="text" id=""
              className="password" name="password"
              placeholder="Password"/>
          </div>
          <div className="row bottom">
            <div className="col-md-6 left">
              <input
                type="checkbox" id="id_remember_me"
                className="RememberMe" name="RememberMe"/>
                <label for="RememberMe">Remember Me</label>

            </div>
            <div className="col-md-6 right">
              <div classname="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <div class="forgot-password">
                  <a href="*">Forgot password</a>
                </div>
              </div>
            </div>
          </div>

          <div className="buttons">
            <div classname="col-xs-6 col-sm-6 col-md-3 col-lg-6">
              <button type="login-button">Login</button>
            </div>
            <div classname="col-xs-6 col-sm-6 col-md-3 col-lg-6">
              <button type="sign-up-button">Sign Up</button>
            </div>
          </div>

          <div classname="col-xs-12">
          </div>
        </div>
      </form>
    );
  }
}
