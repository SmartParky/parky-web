// Packages
import React from 'react';

//Objects
import Header from '../../objects/Header/index';
import Footer from '../../objects/Footer/index';

// Local Modules
import './index.css';

export default class Homepage extends React.Component {
  render() {
    return(
      <div className="container">
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}
