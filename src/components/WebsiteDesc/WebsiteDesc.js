import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class WebsiteDesc extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section-lg bg-web-desc">
          <div className="bg-overlay" />
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 className="text-white">Contact us today</h2>
                <p className="pt-3 home-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  faucibus congue enim, in pulvinar ex molestie nec. In posuere
                  ante suscipit, commodo risus id, eleifend orci.
                </p>
                <Link
                  to="#"
                  className="btn btn-white mt-4 waves-effect waves-light mb-5"
                >
                  View Plan & Pricing
                </Link>
              </Col>
            </Row>
          </Container>
          <div className="bg-pattern-effect">
            <img src="assets/images/bg-pattern.png" alt="" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDesc;
