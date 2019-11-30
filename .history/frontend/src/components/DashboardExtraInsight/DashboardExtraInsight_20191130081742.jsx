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

import Header from "../Header/Header"

const DashboardExtraInsight = (props) => (
  <>

<Col sm={12} className="text-center">
  <Card>
    <CardBody>

      <Col>
        <h3 className =" h5 text-left">
          We match you profile and analyse it even further. To provide you recommendation based on following,
        </h3>
      </Col>
    </CardBody>
    <CardFooter>
        <Button className="btn" color="primary" size="lg">
          Sign Up.
        </Button>
    </CardFooter>
    </Card>
</Col>
</>
);

export default DashboardExtraInsight;
