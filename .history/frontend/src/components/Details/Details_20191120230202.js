import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button, FormGroup
  } from 'reactstrap';
import { AvForm, AvField, AvRadioGroup, AvRadio} from 'availity-reactstrap-validation';

class Details extends React.Component{

    constructor(){
        super();
        this.state = {
            "sat" : "",
            "act" : ""
        }
    }

    handleInvalidSubmit = (event, errors, values) => {
        this.setState({ email: values.email, error: true });
      }
    
      changeHandler = (event) => {
        console.log(event.target.value);
        let key = event.target.name;
        let value = event.target.value;
        console.log("key is ", key);
        this.setState({ [key]: value });
        console.log("state is ", this.state);
      }

    changeRadioHandler = (event) => {
        let value = event.target.value;
        console.log("value is ", value);
        this.setState({ [event.target.name]: value });
      }   

    render(){
        let satDetails =null;
        if(this.state.sat == "appeared"){
            satDetails = 
            (<div>
                <FormGroup>
                    <AvField type="number" name="readingWritingScore" min={500} max={800}  label="Reading Writing Score:" id="readingWritingScore" onChange={this.changeHandler} placeholder="" required />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">/800</span>
                    </div>
                </FormGroup>
                <FormGroup>
                    <AvField type="number" name="essayScore" min={0} max={124} label="Essay Score:" id="essayScore" onChange={this.changeHandler} placeholder="" required />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">/124</span>
                    </div>
                </FormGroup>
                <FormGroup>
                    <AvField type="number" name="subject1Score" min={500} max={800}  label="Subject 1 Score:" id="subject1Score" onChange={this.changeHandler} placeholder="" required />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">/800</span>
                    </div>
                </FormGroup>
                <FormGroup>
                    <AvField type="number" name="subject2Score" min={500} max={800}  label="Subject 2 Score:" id="subject2Score" onChange={this.changeHandler} placeholder="" required />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">/800</span>
                    </div>
                </FormGroup>
            </div>)
        } else if( this.state.sat == "planning"){
            satDetails = 
                (<div>
                    <FormGroup>
                        <AvField type="date" name="date" label="Date:" id="date" onChange={this.changeHandler} placeholder="" required />
                    </FormGroup>
                </div>)
        } 
        let actDetails = null;
        if(this.state.act == "appeared"){
            actDetails = 
            (<div>
                <FormGroup>
                    <AvField type="number" name="compositeScore" min={19} max={36} label="Composite Score:" id="compositeScore" onChange={this.changeHandler} placeholder="" required />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">/36</span>
                    </div>
                </FormGroup>
                <FormGroup>
                    <AvField type="number" name="writingScore" min={2} max={12} label="Writing Score:" id="writingScore" onChange={this.changeHandler} placeholder="" required />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">/12</span>
                    </div>
                </FormGroup>
            </div>)
        } else if( this.state.act == "planning"){
            actDetails = 
                (<div>
                    <FormGroup>
                        <AvField type="date" name="date" label="Date:" id="date" onChange={this.changeHandler} placeholder="" required />
                    </FormGroup>
                </div>)
        } 
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
                            <AvField type="number" step="any" name="gpa" label="GPA:" id="gpa" onChange={this.changeHandler} placeholder="" required />
                            </FormGroup>
                            <AvRadioGroup inline name="sat" label="SAT" required>
                                <AvRadio label="Appeared" value="appeared" name="Appeared" id="appeared" onChange={this.changeRadioHandler} />
                                <AvRadio label="Planning" value="planning" name="Planning" id="planning" onChange={this.changeRadioHandler} />
                            </AvRadioGroup>
                            <div>{satDetails}</div>
                            <AvRadioGroup inline name="act" label="ACT" required>
                                <AvRadio label="Appeared" value="appeared" name="Appeared" id="appeared" onChange={this.changeRadioHandler} />
                                <AvRadio label="Planning" value="planning" name="Planning" id="planning" onChange={this.changeRadioHandler} />
                            </AvRadioGroup>
                            <div>{actDetails}</div>
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