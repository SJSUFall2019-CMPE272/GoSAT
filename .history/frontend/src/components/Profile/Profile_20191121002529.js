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

    handleInvalidSubmit = (event, errors, values) => {
        this.setState({ email: values.email, error: true });
    }
    changeHandler(event) {
        console.log(event.target.value);
        let key = event.target.name;
        let value = event.target.value;
        console.log("key is ", key);
        this.setState(state => {
            return Object.assign({}, state, { app: Object.assign({}, state.app, { [key]: value }) })
        });
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
                        <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.update}>
                            <AvField type="text" label=" First Name :" name="firstName" onChange={this.changeHandler} placeholder="Mark" ></AvField>
                            <AvField type="text" label=" Last Name :" name="lastName" onChange={this.changeHandler} placeholder="Stinson" ></AvField>
                            <AvField type="text" label="Email : " name="email" onChange={this.changeHandler} placeholder="mark@gmail.com" ></AvField>
                            <AvField type="text" name="phone" label="Phone : " onChange={this.changeHandler} placeholder="1234567899" ></AvField>
                            <Button >Edit Details</Button>
                        </AvForm>
                    </CardBody>
                </Card>
            </div>
            </div>
        )
    }
}

export default Profile;