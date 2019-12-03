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

const uniWithSimRankingTitle =  "Universities with similar ranking";
const uniWithSimTuitionTitile = "University with similar tuition";

class Recommendations extends React.Component {

  constructor() {
    super();
  } 

  render(){
    return (
      <>
      <MyNavbar/>
      <div className="header-image"/>
      <Header pageTitle="Recommendations" pageSubTitle="To get more university recommendation outside UCs"/>
      <RecommendationsCardCarousal title = {uniWithSimRankingTitle} />
      <RecommendationsCardCarousal title = {uniWithSimTuitionTitile} />

      </>
    );
  }
}

export default Recommendations;
