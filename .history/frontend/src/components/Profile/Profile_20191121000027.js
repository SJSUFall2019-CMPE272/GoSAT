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
                        <div>
                            FirstName : 
                        </div>
                        <div>
                            LastName : 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;