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

    changeRadioHandler(event) {
        let value = event.target.value;
        console.log("value is ", value);
        this.setState({ userType: value });
      }

    

    render(){
        return (
            <div class="jumbotron">
                <h1 class="display-4">Get Started!</h1>
                <div className="container">
                    <Card>
                        <CardBody>
                        <CardTitle><h3>Fill in your details!</h3></CardTitle>
                        <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.signUp}>
                            <FormGroup>
                            <AvField type="text" label="School:" name="school" id="school" onChange={this.changeHandler} placeholder="School" required />
                            </FormGroup>
                            <FormGroup>
                            <AvField type="number" step="any" name="gpa" label="GPA:" id="gpa" onChange={this.changeHandler} placeholder="GPA" required />
                            </FormGroup>
                            <AvRadioGroup inline name="sat" label="SAT" required>
                                <AvRadio label="Appeared" value="appeared" name="Appeared" id="appeared" onChange={this.changeRadioHandler} />
                                <AvRadio label="Planning" value="planning" name="Planning" id="planning" onChange={this.changeRadioHandler} />
                            </AvRadioGroup>
                            <FormGroup>
                            <AvField type="number" name="emailId" id="emailId" label="Email:" onChange={this.changeHandler} placeholder="email" required />
                            </FormGroup>
                            <FormGroup>
                            <AvField type="password"  name="password" id="password" label="Password:" onChange={this.handlePasswordChange} placeholder="password" required />
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