import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

class TopNav extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn : false,
      firstName : ""
    }
  }

  login = (e) => {
    e.preventDefault();
    window.location.href = '/login'
  }

  signUp = (e) => {
    e.preventDefault();
    window.location.href = "/signUp"
  }

  render(){
    let nav = null;
    if (this.state.isLoggedIn)
      nav = (<div style={{ display: "flex", flexDirection: "row" }}>
        <NavItem>
          <Link style={{ color: "#606369" }} to={this.props.userType === "buyer" ? "/lets-eat" : "/home"}>Home</Link>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Hi, {this.state.firstName}!
      </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem divider />
            <DropdownItem>
              <Link style={{ color: "#606369" }} to="/account" >Account</Link>
            </DropdownItem>
            <DropdownItem>
              <Button onClick={this.logout} >Log out!</Button>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>)
    else
      nav = <div><Button onClick={this.login}>Login</Button> <Button onClick={this.signUp}>SignUp</Button>
      </div>
      

      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/Home"></NavLink>
                </NavItem>
                {nav}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );

  }

}

export default TopNav;