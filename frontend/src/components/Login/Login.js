import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import { connect } from 'react-redux'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FB_APP_ID, GOOGLE_CLIENT_ID } from '../../constants/constants';
import ls from 'local-storage';
import {onLoginFailure, onLoginSuccess} from './../../redux/actions/actions';
import {baseURL} from './../../config/config'

var md5 = require('md5');

const responseFacebook = (response) => {
    console.log(response);
  }

const responseGoogle = (response) => {
    console.log(response);
  }

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

      event.preventDefault();
      fetch(baseURL+'/api/auth/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ emailId: this.state.emailId, password: this.state.password }),
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
          this.props.history.push("/dashboard");
        }
      })
    }

    
    render(){
    return (
      <div class="container">
        <Card >
          <CardBody style={{display:"flex",flexDirection:"column"}}>
            <CardTitle><h3>Sign in with your account!</h3></CardTitle>
            <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.login}>
              <AvField name="emailId" label="Email Address" id="emailId" type="email" onChange={this.handleChange} placeholder="email" required />
              <AvField name="password" label="Password" id="password" type="password" onChange={this.handlePasswordChange} placeholder="password" required />
              <Button style={{ justifyContent: "center" }} >Submit</Button>
            </AvForm>
            <FacebookLogin
              appId= {FB_APP_ID}
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook"
            />
            <GoogleLogin 
              clientId= {GOOGLE_CLIENT_ID}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
            {this.state.error && <div style={{ color: "red" }}>{this.state.error}</div>}
          </CardBody>
        </Card>
      </div>
    );
    }
}



const mapStateToProps = (state) => {
  const isLoggedIn = state.app.isLoggedIn;
  return { isLoggedIn };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccessDispatch: (payload) => { dispatch(onLoginSuccess(payload)) },
    loginFailureDispatch: () => { dispatch(onLoginFailure()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);