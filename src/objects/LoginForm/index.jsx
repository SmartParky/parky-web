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
            <h5 className="parky-header">PRKY</h5>
            <p className="first-text"><span>OTOPARK</span>bulmanın</p>
            <p className="second-text">Kolay yolu.</p>
            <p className="info-text">PRKY size en uygun ve en yakın otoparkı bularak işinizi kolaylaştırmayı hedefleyen bir uygulamadır.Bu uygulama ile otopark bulma telaşından kurtulacaksınız.</p>
          </div>
          <div className="col-xs-12">
            <input
              type="text" id=""
              className="email_address" name="email_address"
              placeholder="Email Adress"/>
          </div>
          <div className="col-md-12">
            <input
              type="text" id=""
              className="password" name="password"
              placeholder="Password"/>
          </div>
          <div className="col-md-12">
              <div class="remember-me">
                <input type="checkbox" id="id_remember_me" name="RememberMe"/>
                <label for="RememberMe">Remember Me</label>
              </div>
              <div class="forgot-password">
                <a href="*">Forgot password</a>
              </div>
          </div>
          <div classname="col-md-12">
            <button className="login-button" type="login-button"><p>Login</p></button>
            <button className="sign-up-button" type="sign-up-button"><p>Sign Up</p></button>
          </div>

          <div classname="col-md-12">
            <p className="footer-top">By signing up,you agree to PARKY</p>
            <p className="footer-bottom">Terms and Conditions <span>&</span> Privacy Policy</p>
          </div>
        </div>
      </form>
    );
  }
}
