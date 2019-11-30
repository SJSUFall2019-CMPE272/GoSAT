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
const LandingJumbo = (props) => (
<>


  <div className = "page-header">
    <div className="content-center">
      <Row className="row-grid justify-content-around align-items-center text-left">
        <Col lg = "4" md = "4">
          <h1 className="text-white">
            {props.inputs.primaryMessage}
            <span className="text-danger">{props.inputs.redText}</span>
          </h1>
          <p className="text-white mb-3">
            {props.inputs.secondaryMessage}
          </p>
          <div className="btn-wrapper mb-3">
            <p className="category text-success d-inline">
              {props.inputs.pricing}
            </p>
            <Button
              className="btn-link"
              color="success"
              href="#changethislinkkunj"
              onClick={e => e.preventDefault()}
              size="sm"
            >
              <i className="fas fa-arrow-right" />
            </Button>
          </div>
          <div className="btn-wrapper">
            <div className="button-container">
              <a href="#kunjfeature1" className="btn-icon btn-simple btn-round btn-neutral"><i className="fas fa-medal" /></a>
              <Button
                className="btn-icon btn-simple btn-round btn-neutral"
                color="default"
                href="#kunjfeature1"
                onClick={e => e.preventDefault()}
              >
                <i className="fas fa-medal" />
              </Button>
              <Button
                className="btn-icon btn-simple btn-round btn-neutral"
                color="default"
                href="#kunjfeature2"
                onClick={e => e.preventDefault()}
              >
                <i className="fas fa-chart-line" />
              </Button>
              <Button
                className="btn-icon btn-simple btn-round btn-neutral"
                color="default"
                href="#kunjfeature3"
                onClick={e => e.preventDefault()}
              >
                <i className="fas fa-graduation-cap" />
              </Button>
            </div>
          </div>
        </Col>
        <Col  lg="8" md="8">
          <img
            alt="..."
            className="img-fluid"
            src={props.inputs.image}
          />
        </Col>
      </Row>
    </div>
  </div>

  </>
);

export default LandingJumbo;
