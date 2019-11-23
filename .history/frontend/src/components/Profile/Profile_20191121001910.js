import React from 'react';
import pic from '../../constants/no-dp.png';
import {
    Card, CardBody,
    CardTitle, Button, FormGroup
} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <img src={pic}></img>
                        <div>
                            Mark Stinson
                    </div>
                    </div>
                </div>
                <Card>
                    <CardBody>
                        <CardTitle>Your Details</CardTitle>
                        <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.update}>
                            <AvField type="text" label=" Last Name :" name="lastName" onChange={this.changeHandler} placeholder={this.props.app.lastName} ></AvField>
                            <AvField type="text" label="Phone : " name="phone" onChange={this.changeHandler} placeholder={this.props.app.phone} ></AvField>
                            <AvField type="text" name="address" label="Address : " onChange={this.changeHandler} placeholder={this.props.app.address} ></AvField>
                            <Button >Update Details</Button>
                            {this.state.error1 && <div style={{ color: "red" }}>{this.state.error1}</div>}
                        </AvForm>
                        <div>
                            <br />
                            First Name :
                            </div>
                        <br />
                        <div>
                            Last Name :
                            </div>
                        <br />
                        <div>
                            Email :
                            </div>
                        <br />
                        <div>
                            Phone Number :
                            </div>
                        <br />
                        <Button >Edit</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Profile;