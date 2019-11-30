import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Row
} from "reactstrap";

const DashboardExtraInsight = (props) => (

<Col sm={12} className="text-center">
<Row>
  <Col className="text-center">
    <h1 className="title text-danger">Extra insights</h1>
    <h3 className="title d-none d-sm-block">
      
    </h3>
    <hr className="line-success hr-center"/>
  </Col>
</Row>
  <Card>
    <Button className="btn" color="primary" size="lg">
      To get more insights, Sign In.
    </Button>
    <hr/>
    </Card>
</Col>
);

export default DashboardExtraInsight;
