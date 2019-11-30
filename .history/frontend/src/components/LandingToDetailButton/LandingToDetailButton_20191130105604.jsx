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


const LandingToDetailsButton = (props) => (
<>
  <Card className="card-plain">
    <CardBody>
      <Button className="btn-primary col">
        Try this app now!
      </Button>
    </CardBody>
  </Card>
</>
);
export default LandingToDetailsButton;
