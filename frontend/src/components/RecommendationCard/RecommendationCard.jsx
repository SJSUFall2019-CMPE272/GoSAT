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

const RecommendationCard = (props) => (
<>
  <Col sm={4}>
    <Card>
    <CardHeader>
      <img className="img-fluid dash-card-image" src={props.img}/>
    </CardHeader>
      <CardBody className="text-center">
        <h3 className="title">{props.name}</h3>
        <h6>{props.place}</h6>
      </CardBody>
    </Card>
  </Col>

  </>
);

export default RecommendationCard;
