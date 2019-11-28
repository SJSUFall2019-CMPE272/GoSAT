import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col
} from "reactstrap";

const DashboardButtonCard = (props) => (
  <Col sm={4}>
    <Card className = "text-center">
      <CardHeader>
        <h1 className="title">{props.title}</h1>
      </CardHeader>
      <CardBody>
        <p>{props.bodyText}</p>
      </CardBody>
      <CardFooter className="text-center">
        <Button className="btn-simple" color="info">
          {props.buttonText}
        </Button>
      </CardFooter>
    </Card>
  </Col>
);

export default DashboardButtonCard;
