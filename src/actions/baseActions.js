// Packages
const request = require("superagent");
const alertify = require("alertify.js");

// Api
const url = "http://127.0.0.1:8000";
const api_url = url + "/v1";
const api_auth_login_url = url + "/auth/login/";
const api_users_url = api_url + "/users/";
const api_cars_url = api_url + "/cars/";
const api_cities_url = api_url + "/cities/";
const api_parks_url = api_url + "/parks/";
const api_rezervations_url = api_url + "/rezervations/";
const api_workinghours_url = api_url + "/workinghours/";

// Status Codes
const HTTP_200_OK = 200;
const HTTP_201_CREATED = 201;
const HTTP_204_NO_CONTENT = 204;
const HTTP_400_BAD_REQUEST = 400;

function setAuthInformations(auth_token, user_id) {
  if (auth_token && user_id) {
    localStorage.setItem("auth_token", auth_token);
    localStorage.setItem("user_id", user_id);

    return true;
  } else {
    return false;
  }
}

function getAuthInformations() {
  var auth_informations = {
    "auth_token": localStorage.getItem("auth_token"),
    "user_id": localStorage.getItem("user_id")
  }

  return auth_informations
}

function removeAuthInformations() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user_id");
}

function isAuthentication() {
  var auth_token = localStorage.getItem("auth_token");
  var user_id = localStorage.getItem("user_id");

  if (auth_token && user_id) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  request,
  alertify,
  url,
  api_url,
  api_auth_login_url,
  api_users_url,
  api_cars_url,
  api_cities_url,
  api_parks_url,
  api_rezervations_url,
  api_workinghours_url,
  HTTP_200_OK,
  HTTP_201_CREATED,
  HTTP_204_NO_CONTENT,
  HTTP_400_BAD_REQUEST,
  setAuthInformations,
  getAuthInformations,
  removeAuthInformations,
  isAuthentication
}
