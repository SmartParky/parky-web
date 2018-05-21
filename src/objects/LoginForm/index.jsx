// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class LoginForm extends React.Component {
  render() {
    return(
      <form>
        <div className="container">
          <div className="row info">
            <div classname="col-xs-12">
              <h6>PARKY</h6>
              <h3><span>OTOPARK</span>bulmanın</h3>
              <h4 classname="second-text">Kolay yolu.</h4>
              <p class="info-text">PRKY size en uygun ve en yakın otoparkı bularak işinizi kolaylaştırmayı hedefleyen bir uygulamadır.Bu uygulama ile otopark bulma telaşından kurtulacaksınız.</p>
            </div>
            <div classname="col-xs-12">
              <div classname="email-input">
              <input
                type="text" id=""
                className="email_address" name="email_address"
                placeholder="Email Adress"/>
              </div>
            </div>
            <div classname="col-xs-12">
              <div classname="password-input">
              <input
                type="text" id=""
                className="password" name="password"
                placeholder="Password"/>
              </div>
            </div>
            <div classname="col-xs-12">
              <div classname="col-xs-6">
                <div class="remember-me-left">
                <input
                  type="checkbox" id="id_remember_me"
                  className="RememberMe" name="RememberMe"/>
                  <label for="RememberMe">Remember Me</label>
                </div>
              </div>
              <div classname="col-xs-6">
                <div class="forgot-password">
                  <a href="*">Forgot password</a>
                </div>
              </div>
            </div>
            <div classname="col-xs-6">
              <button type="login-button">Login</button>
            </div>
            <div classname="col-xs-6">
              <button type="sign-up-button">Sign Up</button>
            </div>
            <div classname="col-xs-12">
            </div>
          </div>
        </div>
      </form>
    );
  }
}
