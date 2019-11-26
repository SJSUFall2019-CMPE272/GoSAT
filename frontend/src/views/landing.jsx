import React, { Component } from 'react';
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ListGroupItem,
  ListGroup,
} from 'reactstrap';

import MyNavbar from "../components/Navbars/MyNavbar";

import LandingJumbo from "../components/LandingJumbo/LandingJumbo";
import LandingFeature from "../components/LandingFeature/LandingFeature";

const variablesJumbo = {
  image : require("../assets/img/explorer.png"),
  primaryMessage : "Get in the university you ",
  redText: "love",
  secondaryMessage : "Hello, we help you to achieve your dream university by learning from your data such as SATs, ACTs, etc.",
  pricing : "Save your application money"
}

class Landing extends React.Component {
  componentDidMount(){
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>

        <MyNavbar />

        <LandingJumbo inputs = {variablesJumbo}/>
        <LandingFeature />
      </>
    )
  }
}
export default Landing;
