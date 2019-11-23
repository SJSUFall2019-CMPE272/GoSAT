import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import TopNav from '../components/TopNav/TopNav';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp';
import Details from '../components/Details';

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
                    <Route path="/details" component={Details} />
                </Router>
            </div>
        )
    }
}

export default Main;