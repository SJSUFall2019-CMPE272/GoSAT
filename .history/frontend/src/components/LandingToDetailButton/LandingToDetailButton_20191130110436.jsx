import React from 'react';
import {withRouter } from 'react-router-dom';

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

const goToDetails = () => {
  this.props.history.push('/details');
}
const LandingToDetailsButton = (props) => (
<>
  <Card className="card-plain">
    <CardBody>
      <Button onClick = {goToDetails} className="btn-primary col">
        Try this app now!
      </Button>
    </CardBody>
  </Card>
</>
);
export default LandingToDetailsButton;
