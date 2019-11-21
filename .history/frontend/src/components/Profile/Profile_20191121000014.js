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
                    <div>
                        <span>
                            FirstName : 
                        </span>
                        <span>
                            LastName : 
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;