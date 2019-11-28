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

import DashboardButtonCard from "../DashboardUpdateCard/DashboardButtonCard";

import MyNavbar from "../Navbars/MyNavbar";
import Footer from "../Footer/Footer";



class Dashboard extends React.Component {

  constructor() {
    super();
  }

  render(){
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
      <Col lg='4'>
        <Card>
          <CardHeader>
            <img className="img-fluid dash-card-image" src={require('../../assets/img/uc-irvine.jpg')}/>
          </CardHeader>
          <CardBody className="text-center">
                <h3 className="title">UC Irvine</h3>
                <div className="card-coin">
                <hr className="line-success hr-center"/>
                </div>
                <h1>
                  <CountUp end={75} suffix={'%'} duration={1.5} redraw={true}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                  </CountUp>
                </h1>
                <p>Your chance of admit</p>
                <hr className="line-success hr-center"/>
                <p>Acceptance Rate</p>
                <h1>75%</h1>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4'>
        <Card>
          <CardHeader>
            <img className="img-fluid dash-card-image" src={require('../../assets/img/uc-la.jpg')}/>
          </CardHeader>
          <CardBody className="text-center">
                <h3 className="title">UC Los Angeles</h3>
                <div className="card-coin">
                <hr className="line-success hr-center"/>
                </div>
                <h1>
                  <CountUp end={67} suffix={'%'} duration={1.5} redraw={true}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                  </CountUp>
                </h1>
                <p>Your chance of admit</p>
                <hr className="line-success hr-center"/>
                <p>Acceptance Rate</p>
                <h1>42 %</h1>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4'>
        <Card>
          <CardHeader>
            <img className="img-fluid dash-card-image" src={require('../../assets/img/uc-berkeley.jpg')}/>
          </CardHeader>
          <CardBody className="text-center">
                <h3 className="title">UC Brekeley</h3>
                <div className="card-coin">
                <hr className="line-success hr-center"/>
                </div>
                <h1>
                  <CountUp end={34} suffix={'%'} duration={1.5} redraw={true}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                  </CountUp>
                </h1>
                <p>Your chance of admit</p>
                <hr className="line-success hr-center"/>
                <p>Acceptance Rate</p>
                <h1>12 %</h1>
          </CardBody>
        </Card>
      </Col>
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
  </Container>
<Footer/>
</>

  );
  }
}

export default Dashboard;
