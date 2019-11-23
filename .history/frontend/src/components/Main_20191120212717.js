import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import TopNav from './TopNav';
import Login from './Login';
import SignUp from './SignUp';
import Details from './Details';

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