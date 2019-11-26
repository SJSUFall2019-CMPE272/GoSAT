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

const LandingFeature = (props) => (
<>
<Container>
  <Row className="justify-content-center">
    <Col lg="12">
      <h1 className="text-center">Step to Success</h1>
      <Row className="row-grid justify-content-center align-items-center">
        <Col className = "px-2 py-2" lg="3">
          <Card className="card-stats">
            <CardBody>
              <div className="info">
                <div className="icon icon-danger">
                  <i className="fas fa-medal" />
                </div>
                <h4 className="info-title">Mention your Achievements</h4>
                <hr className="line-danger align-item-center" />
                <p>
                  Mention all your Achievements like Academic scroes,SAT, ACT, Extracurriculars
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className = "px-2 py-2" lg="3">
          <Card className="card-stats">
            <CardBody>
              <div className="info">
                <div className="icon icon-danger">
                  <i className="fas fa-chart-line" />
                </div>
                <h4 className="info-title">We provide insights</h4>
                <hr className="line-danger" />
                <p>
                  We will provide all the insights. Things you lack at, things you are good.
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className = "px-2 py-2" lg="3">
          <Card className="card-stats">
            <CardBody>
              <div className="info">
                <div className="icon icon-danger">
                  <i className="fas fa-graduation-cap" />
                </div>
                <h4 className="info-title">Your Dream graduation</h4>
                <hr className="line-danger" />
                <p>
                  By following the actionable guide and useful insights, you graduate from your dream university.
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>

</>
);

export default LandingFeature;
