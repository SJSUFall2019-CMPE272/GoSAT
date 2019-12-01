import React from 'react';
import SideNav from '../SideNav/SideNav';
import Collapsible from 'react-collapsible';
import { Line, Circle } from 'rc-progress';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
import {pic} from './../../assets/img/1.jpg'
import DashboardButtonCard from "../DashboardButtonCard/DashboardButtonCard";
import DashboardPictureCard from "../DashboardPictureCard/DashboardPictureCard";
import DashboardExtraInsight from "../DashboardExtraInsight/DashboardExtraInsight";
import {connect} from 'react-redux';
import MyNavbar from "../Navbars/MyNavbar";
import Footer from "../Footer/Footer";




class Dashboard extends React.Component {

  constructor() {
    super();
  }

  goToDetails = () => {
    this.props.history.push('/details');
  }

  render(){
    let univList  = this.props.results;
    let profileDetails = this.props.profileDetails;
    let sat = profileDetails && parseInt(profileDetails.sat.readingWritingScore)
                + parseInt(profileDetails.sat.essayScore)
                  + parseInt(profileDetails.sat.mathScore);
    let act = profileDetails && parseInt(profileDetails.act.compositeScore)
                + parseInt(profileDetails.act.elaScore);
    console.log(univList)
    return (
<>
  <MyNavbar />
  <div className= "header-image"/>
  <Container>
    <Row>
      <Col className="text-center">
        <h1 className="title text-danger">GoSAT Dashboard</h1>
        <h3 className="title d-none d-sm-block">
          Get in-depth details and fine tune your dream here.
        </h3>
        <hr className="line-success hr-center"/>
      </Col>
    </Row>
    {
      univList && 
        <Row>
            <DashboardPictureCard
              title={univList[0].name}
              imagePath={require(univList[0].img)}
              chancePercentage={univList[0].score}
              acceptance={univList[0].admitRate}
            />
              <DashboardPictureCard
                title={univList[1].name}
                imagePath={univList[1].img}
                chancePercentage={univList[1].score}
                acceptance={univList[1].admitRate}
              />
              <DashboardPictureCard
                title={univList[2].name}
                imagePath={univList[2].img}
                chancePercentage={univList[2].score}
                acceptance={univList[2].admitRate}
              />
        </Row>
    }
    
    <Row>
      <Col>
        <Table responsive>
          <thead>
            <tr>
            <th> # </th>
            <th> University Name </th>
            <th> Your Chance of admit </th>
            <th> Acceptance Rate </th>
          </tr>
          </thead>
          <tbody>
          {
            univList && 
            univList.map( (univ,i) => {
              if(i >2)
              return <tr>
              <td>{i+1}</td>
              <td>{univ.name}</td>
              <td>{univ.score}</td>
              <td>{univ.admitRate}</td>
            </tr>
            })
          }
          </tbody>
        </Table>
      </Col>
    </Row>
    <Row>
      <Col>
        <h1 className="title text-center">Current Scores</h1>
        <hr className="line-success hr-center"/>
      </Col>
    </Row>
    {
      profileDetails && 
      <>
      <Row>
      <DashboardButtonCard title = {profileDetails.cgpa} bodyText="GPA" buttonText="Update"/>
      <DashboardButtonCard title = {sat} bodyText="SAT" buttonText="Update"/>
      <DashboardButtonCard title = {act} bodyText="ACT" buttonText="Update"/>
      <DashboardButtonCard title = {profileDetails.agc} bodyText="A-G courses" buttonText="Update"/>
      <DashboardButtonCard title = {profileDetails.hc} bodyText="H courses" buttonText="Update"/>
      
    </Row>
    
    <Row className="text-right">
      <Col>
      <Button className="btn" onClick={this.goToDetails} color="primary" size="lg">
          Update
        </Button>
      </Col>
      </Row>
      </>
    }
    {
      !this.props.isLoggedIn && 
      <div>
        <Row>
          <Col>
            <h1 className="title text-center">Extra Insights</h1>
            <hr className="line-success hr-center"/>
          </Col>
        </Row>
        <Row>
        <DashboardExtraInsight />
      </Row>
      </div>
    }
  </Container>
<Footer/>
</>

  );
  }
}
const mapStateToProps = (state) => {
  const {results, isLoggedIn, profileDetails} = state.app;
  return {results , isLoggedIn ,profileDetails};
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
