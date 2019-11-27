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
import LandingFeatureImage from "../components/LandingFeatureImage/LandingFeatureImage";

const variablesJumbo = {
  image : require("../assets/img/explorer.png"),
  primaryMessage : "Get in the university you ",
  redText: "love",
  secondaryMessage : "Hello, we help you to achieve your dream university by learning from your data such as SATs, ACTs, etc.",
  pricing : "Save your application money"
}

const variablesFeatureImage1 = {
  image : require("../assets/img/glassboy.png"),
  title : "Graduate in your dream university",
  description : "When you follow our easy actionalble guide, you can gaurantee your entry in the college you desire.",
  high1 : "",
  high2 : "",
  high3 : ""
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
        <LandingFeatureImage inputs = {variablesFeatureImage1} />
        <LandingFeature />
      </>
    )
  }
}
export default Landing;
