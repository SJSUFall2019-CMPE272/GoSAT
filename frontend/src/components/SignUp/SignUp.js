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
} from "reactstrap";
import axios from 'axios';
import { baseURL, mlURL} from './../../config/config'
import { AvForm, AvField,} from 'availity-reactstrap-validation';
import { FB_APP_ID, GOOGLE_CLIENT_ID } from '../../constants/constants';
import GoogleLogin from 'react-google-login';
import { onSignUpFailure, onSignUpSuccess} from './../../redux/actions/actions'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {connect} from 'react-redux';

var md5 = require('md5');

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      emailId: null,
      password: null,
      firstName: null,
      lastName: "",
      displayPic: null,
      phone: null
    }
    this.signUp = this.signUp.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  responseGoogle = (response,event) => {
    const pword = response.profileObj.googleId;
    this.setState({
      emailId : response.profileObj.email ,
      password : pword,
      firstName : response.profileObj.givenName,
      lastName : response.profileObj.familyName})
      this.signUp(event);
  }

  responseFacebook = (response,event) => {
    console.log(response);
    var fname = response.name.split(" ")[0];
    var lname = response.name.split(" ")[1];
    this.setState({emailId : response.email , password : response.id , firstName : fname , lastName : lname});
    this.signUp(event);
  }


  signUp(e) {
    if(e)
    e.preventDefault();
    var data = {
      "emailId" : this.state.emailId,
      "password" : this.state.password,
      "firstName" : this.state.firstName,
      "lastName" : this.state.lastName
    }
    console.log("data is ",data);
    axios.post('/api/auth/signUp',JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => {
        return response.json();
      }).then((jsonRes) => {
        if (jsonRes.success == false) {
          console.log("Couldnt signUp");
          this.props.signUpFailureDispatch();
        } else {
            this.props.signUpSuccessDispatch();
            this.props.history.push("/login");
        }
      })
  }

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
  }

  changeHandler = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({ [key]: value });
  }

  handlePasswordChange = (event) => {
    var pword = md5(event.target.value);
    this.setState({ password: pword });
  }


  render() {

    return (
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
                  src={require('../../assets/img/boy-master.png')}
                />
              </Col>
              <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                <Card className="card-register">
                  <CardHeader>
                    <CardTitle>Register</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.signUp}>
                      <FormGroup>
                        <AvField type="text"  name="firstName" id="firstName" onChange={this.changeHandler} placeholder="First Name" required />
                      </FormGroup>
                      <FormGroup>
                        <AvField type="text" name="lastName" id="lastName" onChange={this.changeHandler} placeholder="Last Name" required />
                      </FormGroup>
                      <FormGroup>
                        <AvField type="email" name="emailId" id="emailId"  onChange={this.changeHandler} placeholder="Email Address" required />
                      </FormGroup>
                      <FormGroup>
                        <AvField type="password" name="password" id="password" onChange={this.handlePasswordChange} placeholder="Password" required />
                      </FormGroup>
                      <Button className="btn-round" color="primary" size="lg" type="submit" >Get Started</Button>
                    </AvForm>
                    <hr className="hr-center" color="grey"/>
                    <FacebookLogin
                        appId= {FB_APP_ID}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        render={renderProps => (
                          <button class="btn-round btn-success btn-lg" onClick={renderProps.onClick}><i class="fab fa-facebook-f"></i>  Facebook</button>
                        )}
                      />
                      <GoogleLogin
                        clientId= {GOOGLE_CLIENT_ID}
                        render={renderProps => (
                          <button class="btn-round btn-success btn-lg" onClick={renderProps.onClick} disabled={renderProps.disabled}><i class="fab fa-google"></i> Google </button>
                        )}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                      />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

  </div>
  )
  }
}

const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpSuccessDispatch: () => { dispatch(onSignUpSuccess()) },
    signUpFailureDispatch: () => { dispatch(onSignUpFailure()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
