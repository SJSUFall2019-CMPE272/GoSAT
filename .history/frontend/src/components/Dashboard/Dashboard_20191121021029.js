import React from 'react';
import SideNav from '../SideNav/SideNav';
import { Line, Circle } from 'rc-progress';


class Dashboard extends React.Component{

    constructor(){
        super();
    }

    render(){
    return <div>
        <div class="jumbotron">
  <h1 class="display-4">Work Harder! You are in the right direction!</h1>
  <hr class="my-4" />
        <h1>Your Dream University : Silver Creek</h1>
        <p>The chances of getting into your Dream University with your current profile is  </p><h1>70%</h1>
        <Circle percent="70" strokeWidth="1" strokeColor="#03d3fc" />

</div>
    </div>
}
}

export default Dashboard;