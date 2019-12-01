import React from 'react';
import {
  Card, CardBody,
  CardTitle, Button, FormGroup
} from 'reactstrap';
import { AvForm, AvField,} from 'availity-reactstrap-validation';

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
    data.append('displayPic', this.state.displayPic);
    data.append('phone', this.state.phone);
    console.log("data is ",JSON.stringify(data));
  }

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
  }

  changeHandler(event) {
    console.log(event.target.value);
    let key = event.target.name;
    let value = event.target.value;
    console.log("key is ", key);
    this.setState({ [key]: value });
    console.log("state is ", this.state);
  }

  fileHandler = (event) => {
    this.setState({ displayPic: event.target.files[0] });

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
            <FormGroup>
              <AvField type="phone" name="phone" id="phone" label="Phone:" onChange={this.changeHandler} placeholder="phone" required />
            </FormGroup>
            <AvField type='file' id='multi' name="displayPic" label="Upload display picture" onChange={this.fileHandler} accept="image/*" required />
            <Button type="submit" >Submit</Button>
          </AvForm>
        </CardBody>
      </Card>
    </div>
  }
}

export default SignUp;