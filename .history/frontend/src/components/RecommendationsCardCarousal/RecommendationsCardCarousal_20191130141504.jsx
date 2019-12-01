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


class RecommendationsCardCarousal extends React.Component{
  constructor(){
    super();
    this.state = {
      show : false
    }
  }

  toggle = () => {
    this.setState({show:!show});
  }


  render(){
    const results = this.props.results;
    console.log(results);
    let d1 = <><RecommendationCard uni={results[3]}/>
    <RecommendationCard uni={results[4]} />
    <RecommendationCard uni={results[5]} />
    <RecommendationCard uni={results[6]} />
    <RecommendationCard uni={results[7]}/>
    <RecommendationCard uni={results[8]}/></>
    return(
      <>
    <br/>
    <Container>
    
      <Row>
    <Col>
      <Card className="card-plain">
        <h2>{this.props.title}</h2>
      <Row>
        <RecommendationCard uni={results[0]} />
        <RecommendationCard uni={results[1]} />
        <RecommendationCard uni={results[2]}/>
        {/* <Collapse isOpen={this.toggle}> */}
        { this.state.show && this.d1}
        {/* </Collapse> */}
      </Row>
      <Row>
        <Col className="text-right">
    
        <Button className="btn-round" color="primary" size="lg" onClick={this.toggle}>
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
} 


const mapStateToProps = (state) => {
  const { results} = state.app;
  return {results};

}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsCardCarousal);