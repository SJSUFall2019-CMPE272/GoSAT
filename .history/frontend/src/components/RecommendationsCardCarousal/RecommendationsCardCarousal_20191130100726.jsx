import React,{useState} from 'react';

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
  Col,
  Collapse
} from "reactstrap";
import {connect} from 'react-redux';
import RecommendationCard from "./../RecommendationCard/RecommendationCard"


const RecommendationsCardCarousal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

return(
  <>
<br/>
<Container>

  <Row>
<Col>
  <Card className="card-plain">
    <h2>{props.inputs.title}</h2>
  <Row>

    <RecommendationCard uni={props.inputs.uni1} uniLoc={props.inputs.uniLoc1} imagePath={props.inputs.uniImg1}/>
    <RecommendationCard uni={props.inputs.uni2} uniLoc={props.inputs.uniLoc2} imagePath={props.inputs.uniImg2}/>
    <RecommendationCard uni={props.inputs.uni3} uniLoc={props.inputs.uniLoc3} imagePath={props.inputs.uniImg3}/>
    <Collapse isOpen={isOpen}>
    <RecommendationCard uni={props.inputs.uni4} uniLoc={props.inputs.uniLoc4} imagePath={props.inputs.uniImg4}/>
    <RecommendationCard uni={props.inputs.uni5} uniLoc={props.inputs.uniLoc5} imagePath={props.inputs.uniImg5}/>
    <RecommendationCard uni={props.inputs.uni6} uniLoc={props.inputs.uniLoc6} imagePath={props.inputs.uniImg6}/>
    <RecommendationCard uni={props.inputs.uni7} uniLoc={props.inputs.uniLoc7} imagePath={props.inputs.uniImg7}/>
    <RecommendationCard uni={props.inputs.uni8} uniLoc={props.inputs.uniLoc8} imagePath={props.inputs.uniImg8}/>
    <RecommendationCard uni={props.inputs.uni9} uniLoc={props.inputs.uniLoc9} imagePath={props.inputs.uniImg9}/>
    </Collapse>
  </Row>
  <Row>
    <Col className="text-right">

    <Button className="btn-round" color="primary" size="lg" onClick={toggle}>
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
}

const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsCardCarousal);