import React from 'react';

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

class RecommendationCard extends React.Component{
  constructor(){
    super();
  }

  render(){
    let img = require('./../../assets/img/'+this.props.uni.imagePath);

  return (
    <>
      <Col sm={4}>
        <Card>
        <CardHeader>
          <img className="img-fluid dash-card-image" src={this.props.uni.img}/>
        </CardHeader>
          <CardBody className="text-center">
            <h3 className="title">{this.props.uni.name}</h3>
            <h6>{this.props.uni.place}</h6>
          </CardBody>
        </Card>
      </Col>
    
      </>
    );
  }

}

export default RecommendationCard;
