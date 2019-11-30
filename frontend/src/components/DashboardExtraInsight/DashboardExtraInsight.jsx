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
        <p className =" h5 text-left">
          We match you profile and analyse it even further. To provide you recommendation based on following,
        </p>
          <ul className="list-unstyled mt-5">
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="fas fa-dice-one" />
                </div>
                <div className="ml-3">
                  <h6>Universities with similar ranking</h6>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="fas fa-dice-two" />
                </div>
                <div className="ml-3">
                  <h6>Universities with similar tuition fees</h6>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="fas fa-dice-three" />
                </div>
                <div className="ml-3">
                  <h6></h6>
                </div>
              </div>
            </li>
          </ul>
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
