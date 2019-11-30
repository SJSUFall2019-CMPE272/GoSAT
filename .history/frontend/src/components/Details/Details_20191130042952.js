import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button, FormGroup, Row, Col, Container

} from 'reactstrap';
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import {baseURL} from './../../config/config';
import {connect} from 'react-redux';
import {onUpdateProfileDetailsFailure, onUpdateProfileDetailsSuccess} from './../../redux/actions/actions'
import MyNavbar from "../Navbars/MyNavbar";


class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            "satStatus": "",
            "actStatus": ""
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
        this.setState({ satStatus: value });
    }

    changeRadioHandlerAct = (event) => {
        let value = event.target.value;
        console.log("value is ", value);
        this.setState({ actStatus: value });
    }

    changeRadioHandlerTransfer = (event) => {
        let value = event.target.value;
        console.log("value is ", value);
        this.setState({ transfer: value });
    }

    updateProfileDetails = (event) => {
        event.preventDefault();
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
    fetch(baseURL+'/api/user/updateProfileDetails', {
      method: 'POST',
      body: data
    })
      .then((response) => {
        return response.json();
      }).then((jsonRes) => {
        if (jsonRes.success == false) {
          this.props.updateProfileDetailsFailureDispatch();
        } else {
            this.props.updateProfileDetailsSuccessDispatch(data);
            this.props.history.push('/dashboard');
        }
      })
    }

    render() {
        let satDetails = null;
        if (this.state.satStatus == "appeared") {
            satDetails =
                (
                  <div>
                    <FormGroup>
                        <AvField type="number" name="satW" min={200} max={800} label="Reading Writing Score:" id="satW" onChange={this.changeHandler} placeholder="" required />
                        
                    </FormGroup>
                    <FormGroup>
                        <AvField type="number" name="satE" min={0} max={124} label="Essay Score:" id="satE" onChange={this.changeHandler} placeholder="" required />
                        
                    </FormGroup>
                    <FormGroup>
                        <AvField type="number" name="satM" min={200} max={800} label="Math Score:" id="satM" onChange={this.changeHandler} placeholder="" required />
                        
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
                        <AvField type="number" name="actC" min={12} max={36} label="Composite Score:" id="actC" onChange={this.changeHandler} placeholder="" required />
                        
                    </FormGroup>
                    <FormGroup>
                        <AvField type="number" name="actE" min={12} max={36} label="English Language and Arts Score:" id="actE" onChange={this.changeHandler} placeholder="" required />
                        
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

          <>
  <MyNavbar />

              <div className= "header-image facts"/>

              <Container>
                <Row>
                  <Col className="text-center">
                    <h1 className="title text-danger">Your GoSAT Details</h1>
                    <h3 className="title d-none d-sm-block">
                      Insert details .
                    </h3>
                    <hr className="line-success hr-center"/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                      <Card>
                        <CardBody>
                            <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.updateProfileDetails}>
                                <FormGroup>
                                    <fieldset>
                                        <legend>Dream School:</legend>
                                        <select class="form-control dropdown" id="school" name="school">
                                            <option value="" selected="selected" disabled="disabled">-- select one --</option>
                                                {
                                                    this.props.univList && this.props.univList.map(univ => {
                                                        return <option value={univ.id}>{univ.name}</option>
                                                    })
                                                }
                                        </select>
                                    </fieldset>
                                </FormGroup>
                                <FormGroup>
                                <legend>Current GPA:</legend>
                                    <AvField type="number"  name="cgpa"  id="cgpa" onChange={this.changeHandler} placeholder="" required />
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
                                <FormGroup>
                                <legend>A-G Requirement Courses Completed::</legend>

                        <AvField type="number" name="agc" min={0} max={100} label="A-G Requirement Courses Completed:" id="agc" onChange={this.changeHandler} placeholder="" required />
                    </FormGroup>
                    <FormGroup>
                    <legend>Honors Courses Completed:</legend>

                        <AvField type="number" name="hc" min={0} max={100} label="Honors Courses Completed:" id="hc" onChange={this.changeHandler} placeholder="" required />
                        
                    </FormGroup>
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
                  </Col>
                </Row>

          </Container>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    const {univList} = state.app;
    return {univList};
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        updateProfileDetailsSuccessDispatch: (payload) => { dispatch(onUpdateProfileDetailsSuccess(payload)) },
        updateProfileDetailsFailureDispatch: () => { dispatch(onUpdateProfileDetailsFailure()) }
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Details);
