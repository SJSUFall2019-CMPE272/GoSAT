
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import {connect} from 'react-redux';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="GoSAT application"
              tag={Link}
            >
              <span>GoSAT</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    GoSAT
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="fas fa-times" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
{/* TODO: Remove d-none in future to make small button visible
  Only for reference in order to use in future*/}
              <NavItem className="p-0 d-none">
                <NavLink
                  data-placement="bottom"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Future small button"
                >
                  <i className="fas fa-paperclip" />
                  <p className="d-none ">Button</p>
                </NavLink>
              </NavItem>
              <NavItem>

                { !this.props.isLoggedIn && 
                <Button
                  className="btn-neutral"
                  color="default"
                >
                  <i className="fa fa-sign-in-alt" /> Sign In
                </Button>
                }
              </NavItem>
              <UncontrolledDropdown nav>

                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#kunjnull"
                  nav
                  onClick={e => e.preventDefault()}>
                  <i className="fas fa-user-circle" /> Kunj Parikh
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  {/* TODO: Edit this link to actual dashboard link*/}
                  <DropdownItem tag={Link} to="/dashboard-page">
                    <i className="fas fa-columns" /> Dashboard
                  </DropdownItem>
                  {/* TODO: Edit this link to actual profile link*/}
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="fas fa-user" /> Profile Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
            {/* TODO: Add onClick metthod to logout*/}
                <Button
                  className="btn-neutral"
                  color="default"
                >
                  <i className="fa fa-sign-out-alt" /> Sign Out
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  const isLoggedIn = state.app.isLoggedIn;
  const firstName = state.app.firstName;
  return { isLoggedIn };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyNavbar);
