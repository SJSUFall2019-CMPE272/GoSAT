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

import MyNavbar from "../components/Navbars/MyNavbar"

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
      </>
    )
  }
}
export default Landing;
