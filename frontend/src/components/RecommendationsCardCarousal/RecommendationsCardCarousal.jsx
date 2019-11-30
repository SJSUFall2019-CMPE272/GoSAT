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

import RecommendationCard from "../RecommendationsCard/RecommendationCard";

const RecommendationsCardCarousal = (props) => (
<>
<br/>
<Container>

  <Row>
<Col>
  <Card className="card-plain">
    <h2>{props.inputs.title}</h2>
  <Row>
    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1}/>
    <RecommendationCard uni={props.inputs.uni2} uniLoc={props.inputs.uniLoc2}/>
    <RecommendationCard uni={props.inputs.uni3} uniLoc={props.inputs.uniLoc3}/>
    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1}/>
    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1}/>
    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1}/>
    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1}/>
    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1}/>
    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1}/>
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
