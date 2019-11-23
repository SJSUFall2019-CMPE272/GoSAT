import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button, FormGroup
  } from 'reactstrap';
import { AvForm, AvField,} from 'availity-reactstrap-validation';

class Details extends React.Component{

    constructor(){
        super();
    }

    

    render(){
        return (
            <div class="jumbotron">
                <h1 class="display-4">Get Started!</h1>
                <div className="container">
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
            </div>
            )}
}

export default Details;