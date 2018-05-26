// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class Footer extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row footer">
          <div className="col-xs-12">
            <img src="/image/footer-image.png" alt="footer-image"/>
          </div>
        </div>
      </div>
    );
  }
}
