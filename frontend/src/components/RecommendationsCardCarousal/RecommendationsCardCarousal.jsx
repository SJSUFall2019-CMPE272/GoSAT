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

const RecommendationsCardCarousal = (props) => (
<>
<br/>
<Container>

  <Row>
<Col>
  <Card className="card-plain">
    <h2>{props.inputs.title}</h2>
  <Row>
    <Col sm={4}>
      <Card>
        <CardBody className="text-center">
          <h3 className="title">{props.inputs.uni1}</h3>
          <h6>{props.inputs.uniLoc1}</h6>
        </CardBody>
      </Card>
    </Col>
    <Col sm={4}>
      <Card>
        <CardBody className="text-center">
          <h3 className="title">{props.inputs.uni2}</h3>
          <h6>{props.inputs.uniLoc2}</h6>
        </CardBody>
      </Card>
    </Col>
    <Col sm={4}>
      <Card>
        <CardBody className="text-center">
          <h3 className="title">{props.inputs.uni3}</h3>
          <h6>{props.inputs.uniLoc3}</h6>
        </CardBody>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col className="text-right">
    <Button className="btn-round" color="primary" size="lg">
      See More <i className="fas fa-arrow-right"/>
    </Button>
  </Col>
  </Row>

</Card>
</Col>
</Row>
</Container>

</>
);

export default RecommendationsCardCarousal;
