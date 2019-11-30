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
  uni1: 'SJSU',
  uniLoc1: 'San Jose, CA',
  uni2: 'NYU',
  uniLoc2: 'New York, NY',
  uni3: 'UIC',
  uniLoc3: 'Chicago, IL',
}

const uniWithSimTuition = {
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
      <Header pageTitle="Universities with similar ranking"/>
      <RecommendationsCardCarousal inputs = {uniWithSimRanking} />
      <Header pageTitle="Universities with similar tuition fees"/>
      <RecommendationsCardCarousal inputs = {uniWithSimTuition} />

      </>
    );
  }
}

export default Recommendations;
