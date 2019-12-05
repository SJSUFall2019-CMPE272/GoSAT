import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button, FormGroup, Row, Col, Container

} from 'reactstrap';
import { baseURL} from './../../config/config'
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import {connect} from 'react-redux';
import {onUpdateProfileDetailsFailure, onUpdateProfileDetailsSuccess , onMLPredictionSuccess, onMLPredictionFailure} from './../../redux/actions/actions'
import MyNavbar from "../Navbars/MyNavbar";
import axios from 'axios';

const mlURL = "54.153.123.45/main_process";
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
        this.setState({ gender: value });
    }



    compare = (a, b) =>  {
        let comparison = 0;
  let score1 = a.score;
      let score2 = b.score;
      if(score1>score2)
          comparison = -1;
      else if(score2 > score1)
          comparison = 1;
      else
          comparison = 0;
      return comparison;
  }

    updateProfileDetails = (event) => {
        event.preventDefault();
        var data = {
            "emailId" : this.props.emailId,
            "profileDetails" : {
                "cgpa": this.state.cgpa,
                "gender": this.state.gender,
                "school": this.state.school,
                "ethnicity": this.state.ethnicity,
                "sat": {
                    "status" : this.state.satStatus,
                    "readingWritingScore" : this.state.satW,
                    "essayScore" : this.state.satE,
                    "mathScore" : this.state.satM,
                },
                "act": {
                    "status" : this.state.actStatus,
                    "compositeScore" : this.state.actC,
                    "elaScore" : this.state.actE
                },
                "county" : this.state.county,
                "agc" : this.state.agc,
                "hc" : this.state.hc
            },
            "dreamUniv" : this.state.univ
        }
        var  mldata = { data : {
                "gpa" : parseFloat(this.state.cgpa),
                "scrRead" : parseInt(this.state.satW),
                "scrMath" : parseInt(this.state.satM),
                "scrWrit" : parseInt(this.state.satW),
                "county" : this.state.county,
                "gender" : this.state.gender,
                "ethnicity" : this.state.ethnicity
            }}
        axios.post(baseURL+'/api/user/updateProfileDetails', JSON.stringify(data),{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json'
                  },
                method: 'POST',
            })
            //.then((response) => {
            //    return response.json();
            //})
            .then((jsonRes) => {
                if (jsonRes.success == false) {
                this.props.updateProfileDetailsFailureDispatch();
                } else {
                    this.props.updateProfileDetailsSuccessDispatch(data);
                    this.props.history.push('/dashboard');
                }
            })
            let results = [];
            var url = "http://54.153.123.45/main_process"
                        + "/"+mldata.gpa + "/"+mldata.actE
                        + "/"+mldata.actC + "/"+mldata.satW 
                        + "/"+mldata.satM + "/"+mldata.satE
                        + "/"+mldata.agc + "/"+mldata.hc;// "/3/31/31/700/700/20/50/15";
            axios.post("https://883haygr14.execute-api.us-east-1.amazonaws.com/dev", JSON.stringify(mldata),{
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
              },
              method: 'POST',
            })
            //.then((response) => {
            //   return response.json();
            //})
            .then((jsonRes) => {
                if (jsonRes != null) {
                        // var jsonRes = {
                        //         0 : 76.56,
                        //         1 : 37.87,
                        //         2 : 62.54,
                        //         3 : 89.12,
                        //         4 : 34.89,
                        //         5 : 79.34,
                        //         6 : 90.12,
                        //         7 : 34.67,
                        //         8 : 21.67
                        //     }
                       var univ = this.props.univList[0];
                            univ["score"] = jsonRes["Berkeley"];
                            results.push(univ);
                            var univ = this.props.univList[1];
                            univ["score"] = jsonRes["Los Angeles"];
                            results.push(univ);
                            var univ = this.props.univList[2];
                            univ["score"] = jsonRes["San Diego"];
                            results.push(univ);
                            var univ = this.props.univList[3];
                            univ["score"] = jsonRes["Santa Barbara"];
                            results.push(univ);
                            var univ = this.props.univList[4];
                            univ["score"] = jsonRes["Davis"];
                            results.push(univ);
                            var univ = this.props.univList[5];
                            univ["score"] = jsonRes["Irvine"];
                            results.push(univ);
                            var univ = this.props.univList[6];
                            univ["score"] = jsonRes["Santa Cruz"];
                            results.push(univ);
                            var univ = this.props.univList[7];
                            univ["score"] = jsonRes["Riverside"];
                            results.push(univ);
                            var univ = this.props.univList[8];
                            univ["score"] = jsonRes["Merced"];
                            results.push(univ)
                        console.log("resp",jsonRes);
                        results.sort(this.compare);
                        this.props.mlPredictionSuccessDispatch(results);
                        console.log("res",results);
                } else {
                     this.props.mlPredictionFailureDispatch(data);
                }
                        this.props.history.push('/dashboard');
             }).then( res => {
                if(this.props.isLoggedIn){
                    axios.post(baseURL+'/api/user/updateResults', JSON.stringify({emailId : this.props.emailId,results : results}),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept' : 'application/json'
                          },
                        method: 'POST',
                    })
                    //.then((response) => {
                    //    return response.json();
                    //})
                    .then((jsonRes) => {
                        console.log("results stored in db")
                    })
                    .catch( err => {
                        console.log(err);
                    })
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
                        <AvField type="number" name="satE" min={200} max={800} label="Essay Score:" id="satE" onChange={this.changeHandler} placeholder="" required />
                        
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
                      Insert details !
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
                                        <select class="form-control dropdown" id="univ" onChange={this.changeHandler} name="univ">
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

                        <AvField type="number" name="agc" min={0} max={100} id="agc" onChange={this.changeHandler} placeholder="" required />
                    </FormGroup>
                    <FormGroup>
                    <legend>Honors Courses Completed:</legend>

                        <AvField type="number" name="hc" min={0} max={100} id="hc" onChange={this.changeHandler} placeholder="" required />
                        
                    </FormGroup>
                    <FormGroup>
                                    <fieldset>
                                        <legend>County:</legend>
                                        <select class="form-control dropdown" id="county" onChange={this.changeHandler} name="county">
                                            <option value="" selected="selected" disabled="disabled">-- select one --</option>
                                                <option value="Alameda">Alameda</option>
                                                <option value="Amador">Amador</option>
                                                <option value="Contra Costa">Contra Costa</option>
                                                <option value="Humboldt">Humboldt</option>
                                                <option value="Los Angeles">Los Angeles</option>
                                                <option value="Mendocino">Mendocino</option>
                                                <option value="Monterey">Monterey</option>
                                                <option value="Napa">Napa</option>
                                                <option value="Orange">Orange</option>
                                                <option value="Sacramento">Sacramento</option>
                                                <option value="San Benito">San Benito</option>
                                                <option value="San Bernardino">San Bernardino</option>
                                                <option value="San Diego">San Diego</option>
                                                <option value="San Francisco">San Francisco</option>
                                                <option value="San Joaquin">San Joaquin</option>
                                                <option value="San Mateo">San Mateo</option>
                                                <option value="Santa Barbara">Santa Barbara</option>
                                                <option value="Santa Clara">Santa Clara</option>
                                                <option value="Santa Cruz">Santa Cruz</option>
                                                <option value="Shasta">Shasta</option>                                                <option value="Shasta">Any other ethnic group</option>
                                                <option value="Solano">Solano</option>
                                                <option value="Sonoma">Sonoma</option>
                                                <option value="Ventura">Ventura</option>

                                        </select>
                                    </fieldset>
                                </FormGroup>
                                <AvRadioGroup inline name="gender" label="Gender" required>
                                    <AvRadio label="Male" value="male" name="male" id="male" onChange={this.changeRadioHandlerTransfer} />
                                    <AvRadio label="Female" value="female" name="female" id="female" onChange={this.changeRadioHandlerTransfer} />
                                </AvRadioGroup>
                                <FormGroup>
                                    <fieldset>
                                        <legend>Ethnicity:</legend>
                                        <select class="form-control dropdown" id="ethnicity" onChange={this.changeHandler} name="ethnicity">
                                            <option value="" selected="selected" disabled="disabled">-- select one --</option>
                                                <option value="Asian">Asian</option>
                                                <option value="American American">American American</option>
                                                <option value="Asian">Asian</option>
                                                <option value="Hispanic/Latino">Hispanic/Latino</option>
                                                <option value="African American">African American</option>
                                                <option value="International">International</option>
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
    const {univList, isLoggedIn, emailId} = state.app;
    return {univList , isLoggedIn , emailId};
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        updateProfileDetailsSuccessDispatch: (payload) => { dispatch(onUpdateProfileDetailsSuccess(payload)) },
        updateProfileDetailsFailureDispatch: () => { dispatch(onUpdateProfileDetailsFailure()) },
        mlPredictionSuccessDispatch : (payload) => { dispatch(onMLPredictionSuccess(payload))},
        mlPredictionFailureDispatch : () => { dispatch(onMLPredictionFailure())}
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Details);
