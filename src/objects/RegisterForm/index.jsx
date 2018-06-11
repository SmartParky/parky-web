// Packages
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Actions
import {
  alertify,
  HTTP_201_CREATED,
  HTTP_400_BAD_REQUEST
} from "../../actions/baseActions";
import { createUser } from "../../actions/userActions";


// Local Modules
import './index.css';

export default class RegisterForm extends React.Component {
constructor() {
  super();
  this.state = {
    redirect: false,
    city:"",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    phone_number:"",
    confirm_password: "",
    errors: {}
  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.setErrors = this.setErrors.bind(this);
  this.setRedirect = this.setRedirect.bind(this);
  this.onReset = this.onReset.bind(this);
}

onChange = (e) => {
  const state = this.state
  state[e.target.name] = e.target.value;
  this.setState(state);
}

setErrors = (errors) => {
  this.setState({
    errors: errors
  });

  if (errors.non_field_errors) {
    alertify.error(errors.non_field_errors.join("<br>"));
  }
}

setRedirect = (e) => {
  this.setState({
    redirect: true
  });
}

onReset = (e) => {
  this.setState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    errors: {}
  });
}

onSubmit = (e) => {
  e.preventDefault();
  var data = {
    email: this.state.email,
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    password: this.state.password,
    confirm_password: this.state.confirm_password
  };

  createUser(data, (response) => {
    if (response) {
      if (response.statusCode === HTTP_201_CREATED) {
        this.onReset();
        alertify.success(
          "Your registration was successful.<br> Please verify your email address."
        );
        this.setRedirect();
      } else if (response.statusCode === HTTP_400_BAD_REQUEST) {
        this.setErrors(response.body);
        alertify.error("Please correct the errors and try again.");
      } else {
        this.onReset();
        alertify.error("An unexpected error has occurred and try again later.");
      }
    } else {
      this.onReset();
      alertify.error("An unexpected error has occurred and try again later.");
    }
  });
}


  render() {

  const { redirect, city, email, first_name, last_name, phone_number, password, errors } = this.state;

  if (redirect) {
    return (
      <Redirect to='/login/'/>
    )
  }

    return(
      <form id="id_register_form" onSubmit={this.onSubmit} onReset={this.onReset}>
        <div className="container">
          <div className="row register">
            <div className="col-xs-12">
              <h5>PRKY</h5>
              <h3 className="easy"><span>Kayıt</span> ol</h3>
            </div>
            <div className="col-xs-12">
              <div className="city-input">
              <input
                type="text" id="id_city"
                className="city-box" name="city"
                placeholder="city"
                value={city} onChange={this.onChange}/>
              {errors.city &&
                <div className="input-feedback">
                  {errors.city.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
              <div className="email-input">
              <input
                type="text" id="id_email"
                className="email-box" name="email"
                placeholder="email adress"
                value={email} onChange={this.onChange}/>
              {errors.email &&
                <div className="input-feedback">
                  {errors.email.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
              <div className="name-input">
              <input
                type="text" id="id_first_name"
                className="name-box" name="first_name"
                placeholder="First Name"
                value={first_name} onChange={this.onChange}/>
              {errors.first_name &&
                <div className="input-feedback">
                  {errors.first_name.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
              <div className="name-input">
              <input
                type="text" id="id_last_name"
                className="name-box" name="last_name"
                placeholder="Last Name"
                value={last_name} onChange={this.onChange}/>
              {errors.last_name &&
                <div className="input-feedback">
                  {errors.last_name.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>

              <div className="name-input">
              <input
                type="text" id="id_phone_number"
                className="name-box" name="phone_number"
                placeholder="Phone Number(05** *** ****)"
                value={phone_number} onChange={this.onChange}/>
              {errors.phone_number &&
                <div className="input-feedback">
                  {errors.phone_number.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>

              <div className="password-input">
              <input
                type="text" id="id_password"
                className="password" name="password"
                placeholder="Password"
                value={password} onChange={this.onChange}/>
              {errors.password &&
                <div className="input-feedback">
                  {errors.password.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
            </div>
            <div className="col-xs-12">
              <Link to="/login/">
                <button className="contunie-button" type="contunie-button"><p>Contunie</p></button>
              </Link>
              <Link to="/register/">
                <button className="sign-in-button" type="sign-in-button"><p>Sign in</p></button>
              </Link>
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
