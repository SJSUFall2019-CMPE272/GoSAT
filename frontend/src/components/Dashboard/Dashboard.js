import React from 'react';
import SideNav from '../SideNav/SideNav';
import Collapsible from 'react-collapsible';
import { Line, Circle } from 'rc-progress';


class Dashboard extends React.Component {

  constructor() {
    super();
  }

  render(){
    return <div>
      <div class="jumbotron">
        <h1 class="display-4">Work Harder! You are in the right direction!</h1>
        <hr class="my-4" />
        <h1>Target University : UC Irvine</h1>
        <h3>Intended major: Animal Science</h3>
        <h3>Progress with your current profile is: 70%</h3>

        <div style={{width:"250px", height:"250px"}}>
          <br></br>
          <Circle percent="70" strokeWidth="4" strokeColor="#03d3fc" />
        </div>

        <br></br>
        <br></br>
        <h1>Your Application Report</h1>
        <hr class="my-4" />

        <Collapsible trigger="GPA" classParentString="Report-header">
          <hr class="my-4" />
          <p>Your current GPA: 3.5</p>
          <p>Similar applicants had a: 3.6</p>
          <p>You need to average 3.8 next semester</p>
          <p>Deadline: December 11th 2019</p>
        </Collapsible>

      </div>
    </div>
  }
}

export default Dashboard;