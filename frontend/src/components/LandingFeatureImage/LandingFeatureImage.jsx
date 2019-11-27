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


const LandingFeatureImage = (props) => (
<>
<section className="section section-lg section-safe">
  <Container>
    <Row className="row-grid justify-content-between">
      <Col md="5">
        <img
          alt="..."
          className="img-fluid floating"
          src={props.inputs.image}
        />
      </Col>
      <Col md="6">
        <div className="px-md-5">
          <hr className="line-success" />
          <h3 className="content">{props.inputs.title}</h3>
          <p>
            {props.inputs.description}
          </p>
          <ul className="list-unstyled mt-5">
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="fas fa-dice-one" />
                </div>
                <div className="ml-3">
                  <h6>{props.inputs.high1}</h6>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="fas fa-dice-two" />
                </div>
                <div className="ml-3">
                  <h6>{props.inputs.high2}</h6>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="fas fa-dice-three" />
                </div>
                <div className="ml-3">
                  <h6>{props.inputs.high3}</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
</section>
</>
);

export default LandingFeatureImage;
