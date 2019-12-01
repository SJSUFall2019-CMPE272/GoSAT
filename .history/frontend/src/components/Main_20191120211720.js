import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import TopNav from './TopNav';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

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
                    <Route path="/dashboard" component={Dashboard} />
                </Router>
            </div>
        )
    }
}

export default Main;