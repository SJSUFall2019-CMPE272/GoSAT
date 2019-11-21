import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import TopNav from './TopNav/TopNav';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Details from './Details/Details';
import Profile from './Profile/Profile';
import Dashboard from './Dashboard/Dashboard';

class Main extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return (
            <div>
                <Router>
                    <Route path="/" component={TopNav} />
                    <Route path="/login" component={Login} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/profile" component={Profile}/>
                    <Route path="/details" component={Details} />
                </Router>
            </div>
        )
    }
}

export default Main;