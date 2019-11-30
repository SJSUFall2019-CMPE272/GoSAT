import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
//import TopNav from './TopNav/TopNav';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Details from './Details/Details';
import Profile from './Profile/Profile';
import Dashboard from './Dashboard/Dashboard';
import Recommendations from './Recommendations/Recommendations';

import Landing from '../views/landing';
import SignUpK from '../views/signup';
import LogInK from '../views/login';


class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Router>
                    <Route path="/login" component={Login} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/profile" component={Profile}/>
                    <Route path="/details" component={Details} />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/landing" component={Landing}/>
                    <Route path="/recommendations" component={Recommendations}/>

                    <Route path="/ksu" component={SignUpK}/>
                    <Route path="/kli" component={LogInK}/>

                </Router>
            </div>
        )
    }
}

export default Main;
