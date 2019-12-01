import React from 'react';
import {
  Card, CardBody,
  CardTitle, Button, FormGroup
} from 'reactstrap';
import { AvForm, AvField,} from 'availity-reactstrap-validation';
import {baseURL} from './../../config/config'
var md5 = require('md5');


class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      emailId: null,
      password: null,
      firstName: null,
      lastName: null,
      displayPic: null,
      phone: null
    }
    this.signUp = this.signUp.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  signUp(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('emailId', this.state.emailId);
    data.append('password', this.state.password);
    data.append('firstName', this.state.firstName);
    data.append('lastName', this.state.lastName);
    fetch(baseURL+'/api/auth/signUp', {
      method: 'POST',
      body: data
    })
      .then((response) => {
        return response.json();
      }).then((jsonRes) => {
        if (jsonRes.success == false) {
          console.log("Couldnt signUp");
          this.props.signUpFailureDispatch();
        } else {
            this.props.signUpSuccessDispatch(payload);
            this.props.history.push("/login");
        }
      })
  }

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
  }

  changeHandler(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({ [key]: value });
  }

  handlePasswordChange = (event) => {
    var pword = md5(event.target.value);
    this.setState({ password: pword });
  }


  render() {
    return <div className="container">
      <Card>
        <CardBody>
          <CardTitle><h3>Sign up for a GoSAT account!</h3></CardTitle>
          <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.signUp}>
            <FormGroup>
              <AvField type="text" label="First Name:" name="firstName" id="firstName" onChange={this.changeHandler} placeholder="name" required />
            </FormGroup>
            <FormGroup>
              <AvField type="text" name="lastName" label="Last Name:" id="lastName" onChange={this.changeHandler} placeholder="name" required />
            </FormGroup>
            <FormGroup>
              <AvField type="email" name="emailId" id="emailId" label="Email:" onChange={this.changeHandler} placeholder="email" required />
            </FormGroup>
            <FormGroup>
              <AvField type="password" name="password" id="password" label="Password:" onChange={this.handlePasswordChange} placeholder="password" required />
            </FormGroup>
            <Button type="submit" >Submit</Button>
          </AvForm>
        </CardBody>
      </Card>
    </div>
  }
}

export default SignUp;