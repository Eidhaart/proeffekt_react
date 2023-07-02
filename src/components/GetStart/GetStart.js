import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class GetStart extends Component {
  render() {
    return (
      <section className="section section-lg bg-get-start">
        <div className="bg-overlay" />
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <h1 className="get-started-title text-white">CONTACT</h1>
              <div className="section-title-border mt-4 bg-white" />
              <p className="section-subtitle font-secondary text-white text-center pt-4">
                Proin consequat cursus ligula et consectetur. Fusce at ante
                mauris. Sed rutrum est vitae augue pretium tincidunt. In vel
                pretium ante. {" "}
              </p>
              <Link to="#" className="btn btn-white waves-effect mt-3 mb-4">
                Contact <i className="mdi mdi-arrow-right" />{" "}
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="bg-pattern-effect">
          <img src="assets/images/bg-pattern-light.png" alt="" />
        </div>
      </section>
    );
  }
}

export default GetStart;
