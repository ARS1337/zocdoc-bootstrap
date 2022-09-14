import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Header(props) {
  return (
    <Container fluid className="pt-3 header">
      <Row>
        <Col sm={2}>
          <a href="/" className="headerImage"></a>
        </Col>
        <Col sm={4}></Col>
        <Col sm={6} className="d-flex align-items-center justify-content-between rightSide gap-0 p-0" >
          <a>Browse </a>
          <div className="bar">|</div>
          <a>Help</a>
          <div className="bar">|</div>
          <a>List your practice</a>
          <div className="bar">|</div>
          <a>Log in / Sign up</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
