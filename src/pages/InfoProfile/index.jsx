// Packages
import React from 'react';

//Objects
import Header from '../../objects/Header/index';
import SearchButton from '../../components/SearchButton/index';
import InfoForm from '../../objects/InfoForm/index';
import Footer from '../../objects/Footer/index';

// Local Modules
import './index.css';

export default class Homepage extends React.Component {
  render() {
    return(
      <div className="info-profile">
        <Header></Header>
        <h2 className="profile">PROFİL</h2>
        <InfoForm></InfoForm>
        <Footer></Footer>
      </div>
    );
  }
}
