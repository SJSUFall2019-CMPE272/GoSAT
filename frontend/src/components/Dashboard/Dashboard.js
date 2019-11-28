import React from 'react';
import SideNav from '../SideNav/SideNav';
import Collapsible from 'react-collapsible';
import { Line, Circle } from 'rc-progress';


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
  Col
} from "reactstrap";

import MyNavbar from "../Navbars/MyNavbar";



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
      </Col>
    </Row>
    <Row>
      <Col lg='4'>
        <Card>
          <CardHeader>
            <img className="img-fluid" src={require('../../assets/img/uc-irvine.jpg')}/>
          </CardHeader>
          <CardBody className="text-center">
                <h3 className="title">UC Irvine</h3>
                <div className="card-coin">
                <hr className="line-success hr-center"/>
                </div>
                <h1>96%</h1>
                <p>Your chance of admit</p>
                <hr className="line-success hr-center"/>
                <p>Improvement required</p>
                <h1>4</h1>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4'>
        <Card>
          <CardHeader>
            <img className="img-fluid" src={require('../../assets/img/uc-la.jpg')}/>
          </CardHeader>
          <CardBody className="text-center">
                <h3 className="title">UC Los Angeles</h3>
                <div className="card-coin">
                <hr className="line-success hr-center"/>
                </div>
                <h1>67%</h1>
                <p>Your chance of admit</p>
                <hr className="line-success hr-center"/>
                <p>Improvement required</p>
                <h1>4</h1>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4'>
        <Card>
          <CardHeader>
            <img className="" src={require('../../assets/img/uc-irvine.jpg')}/>
          </CardHeader>
          <CardBody className="text-center">
                <h3 className="title">UC Brekeley</h3>
                <div className="card-coin">
                <hr className="line-success hr-center"/>
                </div>
                <h1>34%</h1>
                <p>Your chance of admit</p>
                <hr className="line-success hr-center"/>
                <p>Improvement required</p>
                <h1>4</h1>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
</>
  );
  }
}

export default Dashboard;
