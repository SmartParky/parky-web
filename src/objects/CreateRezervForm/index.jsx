// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class CreateRezervForm extends React.Component {
  render() {
    return(
      <div className="row rezerv-content">
        <div className="col-md-6">
          <ul>
            <li><p>Otopark</p></li>
            <li><p>Araç</p></li>
            <li><p>Başlangıç & Bitişi</p><span>Tarihi</span></li>
            <li><p>Başlangıç & Bitişi</p><span>Saati</span></li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="col-xs-12">
            <select className="park">
              <option value="forumPark">Forum Park</option>
              <option value="ahmetPark">Ahmet Park</option>
              <option value="farabi">Farabi</option>
              <option value="konak">Konak</option>
            </select>
          </div>
          <div className="col-xs-12">
            <select className="arac">
              <option value="short">Kısa Araç</option>
              <option value="long">Uzun Araç</option>
            </select>
          </div>
          <div className="col-xs-12">
            <input
              type="text" id=""
              className="date-start" name="date-start"/>
            <input
              type="text" id=""
              className="date-finish" name="date-finish"/>
          </div>
          <div className="col-xs-12">
            <input
              type="text" id=""
              className="time-start" name="time-start"/>
            <input
              type="text" id=""
              className="time-finish" name="time-finish"/>
          </div>
        </div>
      </div>
    );
  }
}
