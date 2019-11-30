import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FB_APP_ID, GOOGLE_CLIENT_ID } from './../constants/constants';

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
            isLoggedIn : false
        }
    }

    
    render(){
    return (
      <div class="container">
        <Card >
          <CardBody style={{display:"flex",flexDirection:"column"}}>
            <CardTitle><h3>Sign in with your account!</h3></CardTitle>
            <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.login}>
              <AvField name="email" label="Email Address" id="emailId" type="email" onChange={this.handleChange} placeholder="email" required />
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

export default Login