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

 
class LandingToDetailsButton extends React.Component{
  constructor(){
    super();
  }

  goToDetails = () =>{
    props.history.push('/details');
  }

  render(){
    return <>
    <Card className="card-plain">
      <CardBody>
        <Button onClick = {goToDetails} className="btn-primary col">
          Try this app now!
        </Button>
      </CardBody>
    </Card>
  </>
  }
} = (props) => (
const  
return <>
  <Card className="card-plain">
    <CardBody>
      <Button onClick = {goToDetails} className="btn-primary col">
        Try this app now!
      </Button>
    </CardBody>
  </Card>
</>

export default withRouter(LandingToDetailsButton);
