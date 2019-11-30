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

    render() {
        let satDetails = null;
        if (this.state.sat == "appeared") {
            satDetails =
                (<div>
                    <FormGroup>
                        <AvField type="number" name="readingWritingScore" min={500} max={800} label="Reading Writing Score:" id="readingWritingScore" onChange={this.changeHandler} placeholder="" required />
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
                        <AvField type="number" name="subject1Score" min={500} max={800} label="Subject 1 Score:" id="subject1Score" onChange={this.changeHandler} placeholder="" required />
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">/800</span>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <AvField type="number" name="subject2Score" min={500} max={800} label="Subject 2 Score:" id="subject2Score" onChange={this.changeHandler} placeholder="" required />
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">/800</span>
                        </div>
                    </FormGroup>
                </div>)
        } else if (this.state.sat == "planning") {
            satDetails =
                (<div>
                    <FormGroup>
                        <AvField type="date" name="date" label="Date:" id="date" onChange={this.changeHandler} placeholder="" required />
                    </FormGroup>
                </div>)
        }
        let actDetails = null;
        if (this.state.act == "appeared") {
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
        } else if (this.state.act == "planning") {
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
                                    <AvRadio label="Appeared" value="appeared" name="Appeared" id="appeared" onChange={this.changeRadioHandlerSat} />
                                    <AvRadio label="Planning" value="planning" name="Planning" id="planning" onChange={this.changeRadioHandlerSat} />
                                </AvRadioGroup>
                                <div>{satDetails}</div>
                                <AvRadioGroup inline name="act" label="ACT" required>
                                    <AvRadio label="Appeared" value="appeared" name="Appeared" id="appeared" onChange={this.changeRadioHandlerAct} />
                                    <AvRadio label="Planning" value="planning" name="Planning" id="planning" onChange={this.changeRadioHandlerAct} />
                                </AvRadioGroup>
                                <div>{actDetails}</div>
                                <FormGroup>
                                    <AvField type="password" name="password" id="password" label="Password:" onChange={this.handlePasswordChange} placeholder="password" required />
                                </FormGroup>
                                <FormGroup>
                                    <AvField type="phone" name="phone" id="phone" label="Phone:" onChange={this.changeHandler} placeholder="phone" required />
                                </FormGroup>
                                <FormGroup>
                                    <fieldset>
                                        <legend>Ethnicity:</legend>
                                        <select class="form-control dropdown" id="ethnicity" name="ethnicity">
                                            <option value="" selected="selected" disabled="disabled">-- select one --</option>
                                            <optgroup label="White">
                                                <option value="White English">English</option>
                                                <option value="White Welsh">Welsh</option>
                                                <option value="White Scottish">Scottish</option>
                                                <option value="White Northern Irish">Northern Irish</option>
                                                <option value="White Irish">Irish</option>
                                                <option value="White Gypsy or Irish Traveller">Gypsy or Irish Traveller</option>
                                                <option value="White Other">Any other White background</option>
                                            </optgroup>
                                            <optgroup label="Mixed or Multiple ethnic groups">
                                                <option value="Mixed White and Black Caribbean">White and Black Caribbean</option>
                                                <option value="Mixed White and Black African">White and Black African</option>
                                                <option value="Mixed White Other">Any other Mixed or Multiple background</option>
                                            </optgroup>
                                            <optgroup label="Asian">
                                                <option value="Asian Indian">Indian</option>
                                                <option value="Asian Pakistani">Pakistani</option>
                                                <option value="Asian Bangladeshi">Bangladeshi</option>
                                                <option value="Asian Chinese">Chinese</option>
                                                <option value="Asian Other">Any other Asian background</option>
                                            </optgroup>
                                            <optgroup label="Black">
                                                <option value="Black African">African</option>
                                                <option value="Black African American">African American</option>
                                                <option value="Black Caribbean">Caribbean</option>
                                                <option value="Black Other">Any other Black background</option>
                                            </optgroup>
                                            <optgroup label="Other ethnic groups">
                                                <option value="Arab">Arab</option>
                                                <option value="Hispanic">Hispanic</option>
                                                <option value="Latino">Latino</option>
                                                <option value="Native American">Native American</option>
                                                <option value="Pacific Islander">Pacific Islander</option>
                                                <option value="Other">Any other ethnic group</option>
                                            </optgroup>
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