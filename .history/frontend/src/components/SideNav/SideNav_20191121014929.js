import React from "react"
import "./SideNav.css"
import { Link, Switch, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import About from '../About/About';

class SideNav extends React.Component {
  state = {
    state: {
      showNav: false
    }
  }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "250px" : "0" }

    return (
        <div>
        <span onClick={this.openNavClick} class="open-nav">
          &#9776; 
        </span>
        <div
          onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <a href="#" onClick={this.closeNavClick} class="close-nav">
            &times;
          </a>
          <Link to="/about" >About</Link>
          <Link to="/dashboard" >Dashboard</Link>
          <Link to="/profile" >Profile</Link>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <Switch>
          <Route path="/account/profile">
            <Profile></Profile>
          </Route>
          <Route path="/account/profile">
            <About></About>
          </Route>
        </Switch>
        </div>
    )
  }
}

export default SideNav
