import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col
} from "reactstrap";
import {pic} from './../../assets/img/1.jpg'
const path = './../../assets/img/';


class DashboardPictureCard extends React.Component{
  constructor(){
    super()
  }

    render(){
      return <Col sm={4}>
      <Card>
        <CardHeader>
          <img className="img-fluid dash-card-image" src={require('./../../assets/img/1.jpg')}/>
        </CardHeader>
        <CardBody className="text-center">
              <h3 className="title">{this.props.title}</h3>
              <div className="card-coin">
              <hr className="line-success hr-center"/>
              </div>
              <h1>
                <CountUp end={props.chancePercentage} suffix={'%'} duration={1.5} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
              </h1>
              <p>Your chance of admit</p>
              <hr className="line-success hr-center"/>
              <p>Acceptance Rate</p>
              <h1>{props.acceptance}</h1>
        </CardBody>
      </Card>
    </Col>
    }
  }

export default DashboardPictureCard;
