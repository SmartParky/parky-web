// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class Header extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row header">
          <div className="col-xs-12">
            <img src="/images/header-image.png" alt="header"/>
            <h1 className="header-text">PRKY</h1>
          </div>
        </div>
      </div>
    );
  }
}
