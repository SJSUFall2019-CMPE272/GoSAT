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

  render(){
    let univList  = this.props.results;;
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
    <Row>
      { univList  && 
     DashboardPictureCard
      title={univList[0].name}
      imagePath={require("../../assets/img/uc-irvine.jpg")}
      chancePercentage={univList[0].score}
      acceptance={univList[0].admitRate}
    />
      <DashboardPictureCard
        title={univList[1].name}
        imagePath={require("../../assets/img/uc-irvine.jpg")}
        chancePercentage={univList[1].score}
        acceptance={75}
      />
      <DashboardPictureCard
        title={univList[2].name}
        imagePath={require("../../assets/img/uc-la.jpg")}
        chancePercentage={univList[2].score}
        acceptance={42}
      />
      }
    </Row>
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
            <tr>
              <td>4</td>
              <td>UC Merced</td>
              <td>45 %</td>
              <td>45 %</td>
            </tr>
            <tr>
              <td>5</td>
              <td>UC Santa Cruz</td>
              <td>45 %</td>
              <td>45 %</td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
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
    <Row>
      <DashboardButtonCard title = "3.6" bodyText="GPA" buttonText="Update"/>
      <DashboardButtonCard title = "1462" bodyText="SAT" buttonText="Update"/>
      <DashboardButtonCard title = "32" bodyText="ACT" buttonText="Update"/>
      <DashboardButtonCard title = "12" bodyText="A-G courses" buttonText="Update"/>
      <DashboardButtonCard title = "5" bodyText="H courses" buttonText="Update"/>
    </Row>
    <Row>
      <Col>
        <h1 className="title text-center">Extra Insights</h1>
        <hr className="line-success hr-center"/>
      </Col>
    </Row>
    <Row>
      <DashboardExtraInsight />
    </Row>
  </Container>
<Footer/>
</>

  );
  }
}
const mapStateToProps = (state) => {
  const {results, isLoggedIn} = state.app;
  return {results , isLoggedIn };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
