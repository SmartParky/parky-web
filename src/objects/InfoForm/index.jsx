// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class InfoForm extends React.Component {
  render() {
    return(
      <form>
        <div className="info-form">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h6>Kişisel Bilgiler</h6>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="email-text">Email</label>
                  <input className="email" placeholder="betulyorganci@ornek.com"/>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="name-text">İsim</label>
                  <input className="name" placeholder="Betül"/>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="surname-text">Soyisim</label>
                  <input className="surname" placeholder="Yorgancı"/>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="phone-text">Telefon</label>
                  <input className="phone" placeholder="0(123) 456 7890"/>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="city-text">Şehir</label>
                  <input className="city" placeholder="Trabzon"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h6>Araç Bilgileri</h6>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="plate-text">Plaka</label>
                  <input className="plate" placeholder="61 BT 35"/>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="type-text">Tip</label>
                  <input className="type" placeholder="Ticari"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <button type="submit" className="reservation-button">Rezervasyon Oluştur</button>
              </div>
              <div className="col-xs-6">
                <button type="submit" className="save-button">Bilgilerimi Kaydet</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
