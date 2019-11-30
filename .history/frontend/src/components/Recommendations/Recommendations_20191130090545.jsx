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

import RecommendationsCardCarousal from "../RecommendationsCardCarousal/RecommendationsCardCarousal";

import MyNavbar from "../Navbars/MyNavbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const uniWithSimRanking = {

  title: 'Universities with similar ranking',

  uni1: 'San Jose State University',
  uniLoc1: 'San Jose, CA',
  uniImg1: require("../../assets/img/uc-irvine.jpg"),
  uni2: 'New York University',
  uniLoc2: 'New York, NY',
  uniImg2: require("../../assets/img/uc-irvine.jpg"),
  uni3: 'University of Illinois at Chicago',
  uniLoc3: 'Chicago, IL',
  uniImg3: require("../../assets/img/uc-irvine.jpg"),
}

const uniWithSimTuition = {
  title: 'University with similar tuition',
  uni1: 'SJSU',
  uniLoc1: 'San Jose, CA',
  uni2: 'NYU',
  uniLoc2: 'New York, NY',
  uni3: 'UIC',
  uniLoc3: 'Chicago, IL',
}


class Recommendations extends React.Component {

  constructor() {
    super();
  }

  render(){
    return (
      <>
      <div className="header-image"/>
      <Header pageTitle="Recommendations" pageSubTitle="To get more university recommendation outside UCs"/>
      <RecommendationsCardCarousal inputs = {uniWithSimRanking} />
      <RecommendationsCardCarousal inputs = {uniWithSimTuition} />

      </>
    );
  }
}

export default Recommendations;
