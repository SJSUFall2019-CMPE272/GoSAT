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
  <Col sm={4}>
    <Card>
      <CardBody className="text-center">
        <h3 className="title">{props.uni}</h3>
        <h6>{props.uniLoc}</h6>
      </CardBody>
    </Card>
  </Col>
);

export default RecommendationCard;
