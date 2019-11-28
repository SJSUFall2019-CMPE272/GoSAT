import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button, FormGroup
} from 'reactstrap';
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';

class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            "sat": "",
            "act": ""
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

    changeRadioHandlerSat = (event) => {
        let value = event.target.value;
        console.log("value is ", value);
        this.setState({ sat: value });
    }

    changeRadioHandlerAct = (event) => {
        let value = event.target.value;
        console.log("value is ", value);
        this.setState({ act: value });
    }

    changeRadioHandlerTransfer = (event) => {
        let value = event.target.value;
        console.log("value is ", value);
        this.setState({ act: value });
    }

    updateProfileDetails = (event) => {
        event.preventDefault();
        const data = new FormData();
    data.append('emailId', this.state.emailId);
    data.append('userType', this.state.userType);
    data.append('displayPic', this.state.displayPic);
    data.append('address', this.state.address);
    data.append('phone', this.state.phone);
        var data = {
            "emailId" : this.state.emailId,
            "profileDetails" : {
                "cgpa": this.state.cgpa,
                "gender": this.state.gender,
                "transfer": this.state.transfer,
                "school": this.state.school,
                "ethnicity": this.state.ethnicity,
                "sat": {
                    "status" : this.state.satStatus,
                    "readingWritingScore" : this.state.readingWritingScore,
                    "essayScore" : this.state.essayScore,
                    "mathScore" : this.state.mathScore,
                    "Subject2Score" : this.state.Subject2Score
                },
                "act": {
                    "status" : this.state.actStatus,
                    "compositeScore" : this.state.compositeScore,
                    "elaScore" : this.state.elaScore
                },
                "transferStudent" : this.state.transfer
            }
        }
    fetch('/api/auth/signUp', {
      method: 'POST',
      body: data
    })
      .then((response) => {
        console.log(response)
        return response.json();
      }).then((jsonRes) => {
        console.log("jsonRes is: ", jsonRes);
        if (jsonRes.success == false) {
          console.log("Couldnt signUp");
          this.props.signUpFailureDispatch();
        } else {
          console.log(" Registered ! ", jsonRes);
          if (this.state.userType === "buyer")
            this.props.history.push("/login");
          else {
            var payload = {
              emailId: this.state.emailId,
              userType: this.state.userType
            }
            this.props.signUpSuccessDispatch(payload);
            this.props.history.push('/signUpOwner');
          }
        }
      })
    }

    render() {
        let satDetails = null;
        if (this.state.satStatus == "appeared") {
            satDetails =
                (<div>
                    <FormGroup>
                        <AvField type="number" name="readingWritingScore" min={200} max={800} label="Reading Writing Score:" id="readingWritingScore" onChange={this.changeHandler} placeholder="" required />
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
                        <AvField type="number" name="mathScore" min={200} max={800} label="Math Score:" id="mathScore" onChange={this.changeHandler} placeholder="" required />
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">/800</span>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <AvField type="number" name="subject2Score" min={200} max={800} label="Subject 2 Score:" id="subject2Score" onChange={this.changeHandler} placeholder="" required />
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">/800</span>
                        </div>
                    </FormGroup>
                </div>)
        } else if (this.state.satStatus == "planning") {
            satDetails =
                (<div>
                    <FormGroup>
                        <AvField type="date" name="date" label="Date:" id="date" onChange={this.changeHandler} placeholder="" required />
                    </FormGroup>
                </div>)
        }
        let actDetails = null;
        if (this.state.actStatus == "appeared") {
            actDetails =
                (<div>
                    <FormGroup>
                        <AvField type="number" name="compositeScore" min={12} max={36} label="Composite Score:" id="compositeScore" onChange={this.changeHandler} placeholder="" required />
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">/36</span>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <AvField type="number" name="elaScore" min={12} max={36} label="Ela Score:" id="elaScore" onChange={this.changeHandler} placeholder="" required />
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">/36</span>
                        </div>
                    </FormGroup>
                </div>)
        } else if (this.state.actStatus == "planning") {
            actDetails =
                (<div>
                    <FormGroup>
                        <AvField type="date" name="date" label="Date:" id="date" onChange={this.changeHandler} placeholder="" required />
                    </FormGroup>
                </div>)
        }
        return (
            <div class="jumbotron jumbotron-fluid">
                <h1 class="display-4">Get Started!</h1>
                <div className="container">
                    <Card>
                        <CardBody>
                            <CardTitle><h3>Fill in your details!</h3></CardTitle>
                            <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.updateProfileDetails}>
                                <FormGroup>
                                    <AvField type="text" label="Dream School:" name="school" id="school" onChange={this.changeHandler} placeholder="School" required />
                                </FormGroup>
                                <FormGroup>
                                    <AvField type="number" step="any" name="cgpa" label="Current GPA:" id="cgpa" onChange={this.changeHandler} placeholder="" required />
                                </FormGroup>
                                <AvRadioGroup inline name="satStatus" label="SAT" required>
                                    <AvRadio label="Appeared" value="appeared" name="Appeared" id="appeared" onChange={this.changeRadioHandlerSat} />
                                    <AvRadio label="Planning" value="planning" name="Planning" id="planning" onChange={this.changeRadioHandlerSat} />
                                </AvRadioGroup>
                                <div>{satDetails}</div>
                                <AvRadioGroup inline name="actStatus" label="ACT" required>
                                    <AvRadio label="Appeared" value="appeared" name="Appeared" id="appeared" onChange={this.changeRadioHandlerAct} />
                                    <AvRadio label="Planning" value="planning" name="Planning" id="planning" onChange={this.changeRadioHandlerAct} />
                                </AvRadioGroup>
                                <div>{actDetails}</div>
                                <AvRadioGroup inline name="transfer" label="Transfer Student" required>
                                    <AvRadio label="True" value="true" name="True" id="true" onChange={this.changeRadioHandlerTransfer} />
                                    <AvRadio label="False" value="false" name="False" id="false" onChange={this.changeRadioHandlerTransfer} />
                                </AvRadioGroup>
                                <FormGroup>
                                    <fieldset>
                                        <legend>Ethnicity:</legend>
                                        <select class="form-control dropdown" id="ethnicity" name="ethnicity">
                                            <option value="" selected="selected" disabled="disabled">-- select one --</option>
                                                <option value="Asian">Asian</option>
                                                <option value="Hispanic">Hispanic</option>
                                                <option value="Latino">Latino</option>
                                                <option value="Native American">Native American</option>
                                                <option value="Other">Any other ethnic group</option>
                                        </select>
                                    </fieldset>
                                </FormGroup>
                                <Button type="submit" >Submit</Button>
                            </AvForm>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Details;