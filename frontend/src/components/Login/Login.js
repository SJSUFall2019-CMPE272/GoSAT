import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from 'reactstrap';
import { connect } from 'react-redux'
import { AvForm, AvField } from 'availity-reactstrap-validation';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import {baseURL, mlURL} from './../../config/config';

import GoogleLogin from 'react-google-login';

import { FB_APP_ID, GOOGLE_CLIENT_ID } from '../../constants/constants';
import ls from 'local-storage';
import {onLoginFailure, onLoginSuccess} from './../../redux/actions/actions';


var md5 = require('md5');

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn : false,
            emailId: "",
            password: "",
            error: null
        }
    }

    responseGoogle = (response,event) => {
      const pword = response.profileObj.googleId;
      this.setState({
        emailId : response.profileObj.email ,
        password : pword,
        firstName : response.profileObj.givenName,
        lastName : response.profileObj.familyName})
        this.login(event);
    }

    responseFacebook = (response,event) => {
      console.log(response);
      var fname = response.name.split(" ")[0];
      var lname = response.name.split(" ")[1];
      this.setState({emailId : response.email , password : response.id , firstName : fname , lastName : lname});
      this.login(event);
    }

    handleInvalidSubmit = (event, errors, values) => {
      this.setState({ email: values.email, error: true });
    }

    handlePasswordChange = (event) => {
      var pword = md5(event.target.value);
      this.setState({ password: pword });
    }

    handleChange = (event)  => {
      this.setState({ emailId: event.target.value });
    }

    login = (event) => {
      console.log("state is ", this.state);
      if(event)
      event.preventDefault();
      fetch(baseURL+'/api/auth/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: { emailId: this.state.emailId, password: this.state.password },
      })
      .then((response) => {
        return response.json();
      }).then((jsonRes) => {
        console.log("jsonRes is: ", jsonRes);
        if (jsonRes.success == false) {
          console.log("Couldnt login");
          this.setState({
            error: jsonRes.message
          })
          this.props.loginFailureDispatch();
        } else {
          console.log("logged in ! ", jsonRes);
          ls.set('jwtToken', jsonRes.token);
          ls.set('isLoggedIn', true);
          this.props.loginSuccessDispatch(jsonRes);
          if(this.props.profileDetails != undefined)
          this.props.history.push("/dashboard");
          else
          this.props.history.push("/details");
        }
      })
    }


    render(){
    return (
<>
<div className="wrapper">
  <div className="page-header">
    <div className="page-header-image" />
    <div className="content">
      <Container>
        <Row>
          <Col>
            <img
              alt="..."
              className=""
              src={require('../../assets/img/old-master.png')}
            />
          </Col>
          <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
            <Card className="card-register">
              <CardHeader>
                <CardTitle>Login</CardTitle>
              </CardHeader>
              <CardBody>
                <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.login}>

                  <AvField name="emailId" id="emailId" type="email" onChange={this.handleChange} placeholder="Email" required />
                  <AvField name="password" id="password" type="password" onChange={this.handlePasswordChange} placeholder="Password" required />
                  <hr/>
                  <Row>
                    <Col className="text-center" xs={6}>
                      <Button className="btn-round" color="success" size="lg" >Log In</Button>
                    </Col>
                    <Col className="text-center" xs={6}>
                      <Button className="btn-round" color="light" size="lg" >Back</Button>
                    </Col>
                  </Row>
                </AvForm>
                <hr className="hr-center" color="grey"/>
                <Row>
                  <Col className="text-center" xs={6}>
                    <FacebookLogin
                      appId = {FB_APP_ID}
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      render={renderProps => (
                        <button class="btn-round btn-success btn-lg" onClick={renderProps.onClick}><i class="fab fa-facebook-f"></i>  Facebook</button>
                      )}
                    />
                  </Col>
                  <Col className="text-center" xs={6}>
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        render={renderProps => (
                          <button class="btn-round btn-success btn-lg" onClick={renderProps.onClick} disabled={renderProps.disabled}><i class="fab fa-google"></i> Google </button>
                        )}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                      />
                    </Col>
                </Row>

              </CardBody>
                    {/* <FacebookLogin
                      appId= {FB_APP_ID}
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      cssClass="btn btn-round btn-success fab fa-facebook-square"
                    /> */}
                    {/* <GoogleLogin
                      clientId= {GOOGLE_CLIENT_ID}
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      className="btn-round btn-success"
                    /> */}
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  </div>
</div>
</>
    );
    }
}



const mapStateToProps = (state) => {
  const isLoggedIn = state.app.isLoggedIn;
  const profileDetails = state.app.profileDetails;
  return { isLoggedIn , profileDetails  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccessDispatch: (payload) => { dispatch(onLoginSuccess(payload)) },
    loginFailureDispatch: () => { dispatch(onLoginFailure()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
