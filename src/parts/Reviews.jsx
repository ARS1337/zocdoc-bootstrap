import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Reviews(props) {
  return (
    <Container className="py-5" style={{color:"rgb(0, 35, 75)"}}>
      <Row>
        <Col sm={6}>
          <div className="h1 font-weight-bold">{props.main}</div>
          <div className="h6 py-1">
            <span className="font-weight-bold ">{props.percent}</span>
            {props.details}
          </div>
          <a href="#"> {props.link}</a>
        </Col>
        <Col sm={6}>right</Col>
      </Row>
      <Row className=" w-100">
        <div className="d-flex align-items-center justify-content-center">
          <div>arrow</div>
        </div>
      </Row>
    </Container>
  );
}

export default Reviews;
