import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { retrieveUser } from '../../actions/userActions';

import './index.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      username: "",
      dropdownOpen: false
    };
  }

  componentDidMount() {
    retrieveUser((response)=>{
      this.setState({
        username: "response.first_name"
      });
    });
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
          {this.state.username}
        </DropdownToggle>
        <DropdownMenu className="account-menu-item">
        <Link to= "/info/">
          <DropdownItem className="account-button">Profil</DropdownItem>
        </Link>
          <DropdownItem divider />
          <DropdownItem className="account-button"><a href="/info/">Hakkımızda</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="account-button"><a className="exit" href="/login/">Çıkış</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
