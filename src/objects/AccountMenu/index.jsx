import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './index.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown className="account-menu" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret className="account-title">
          Betül Yorgancı
        </DropdownToggle>
        <DropdownMenu className="account-menu-item">
          <DropdownItem className="account-button"><a href="#">Profil</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="account-button"><a href="#">Hakkımızda</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="account-button"><a className="exit" href="#">Çıkış</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
