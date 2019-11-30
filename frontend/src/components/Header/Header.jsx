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


const Header = (props) => (
<>


<Container>
  <Row>
    <Col className="text-center">
      <h1 className="title text-danger">{props.pageTitle}</h1>
      <h3 className="title d-none d-sm-block">
        {props.pageSubTitle}
      </h3>
      <hr className="line-success hr-center"/>
    </Col>
  </Row>
</Container>
</>
);

export default Header;
