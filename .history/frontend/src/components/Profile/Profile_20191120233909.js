import React from 'react';
import pic from '../../constants/no-dp.png';

class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <img src={pic}></img>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        )
    }
}

export default Profile;