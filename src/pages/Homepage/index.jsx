// Packages
import React from 'react';

//Objects
import Header from '../../objects/Header/index';
import SearchButton from '../../components/SearchButton/index';
import Footer from '../../objects/Footer/index';

// Local Modules
import './index.css';

export default class Homepage extends React.Component {
  render() {
    return(
      <div className="container">
        <Header></Header>
        <SearchButton></SearchButton>
        <div className="row">
        	<div className="col-xs-12">
        		<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.8097480962901!2d39.77052569729367!3d40.99814196561044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x569d1edb5add3f22!2zQXRhdMO8cmsgS8O8bHTDvHIgTWVya2V6!5e0!3m2!1str!2str!4v1514205121708" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
        	</div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
