import React from 'react';


class Dashboard extends React.Component{

    constructor(){
        super();
        this.state = {
            sideNavLeft: false,
          }
    }

    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
          [sidenavNr]: !this.state[sidenavNr]
        });
      };

    render(){
        return (
            <Router>
              <MDBContainer>
                <MDBBtn onClick={this.sidenavToggle("Left")}>
                  <MDBIcon size="lg" icon="bars" />
                </MDBBtn>
                <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
                  className="sn-bg-1">
                  <li>
                    <div className="logo-wrapper sn-ad-avatar-wrapper">
                      <a href="#!">
                        <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
                        <span>Anna Deynah</span>
                      </a>
                    </div>
                  </li>
      
                  <MDBSideNavNav>
                    <MDBSideNavLink to="/other-page" topLevel>
                      <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
                    <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
                      <MDBSideNavLink>Submit listing</MDBSideNavLink>
                      <MDBSideNavLink>Registration form</MDBSideNavLink>
                    </MDBSideNavCat>
                    <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
                      <MDBSideNavLink>For bloggers</MDBSideNavLink>
                      <MDBSideNavLink>For authors</MDBSideNavLink>
                    </MDBSideNavCat>
                    <MDBSideNavCat name="About" id="about" icon="eye">
                      <MDBSideNavLink>Instruction</MDBSideNavLink>
                      <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                    </MDBSideNavCat>
                    <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                      <MDBSideNavLink>FAQ</MDBSideNavLink>
                      <MDBSideNavLink>Write a message</MDBSideNavLink>
                    </MDBSideNavCat>
                  </MDBSideNavNav>
                </MDBSideNav>
              </MDBContainer>
            </Router>
          );
}
}

export default Dashboard;