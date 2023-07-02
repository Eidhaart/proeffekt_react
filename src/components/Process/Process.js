import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./ProcessBox";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          icon: "pe-7s-pen",
          title: "STEP 1",
          desc: "Process"
        },
        {
          icon: "pe-7s-id",
          title: "STEP 2",
          desc: "Process"
        },
        {
          icon: "pe-7s-target",
          title: "STEP 3",
          desc: "Process"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="WORK PROCESS"
              desc="orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum, neque et auctor lacinia, odio turpis ullamcorper tortor, tincidunt eleifend mauris sapien sed risus. Duis volutpat posuere justo quis varius. Nulla sem nulla, finibus vestibulum vestibulum quis, fringilla vitae purus. "
            />

            <Row>
              <Col lg={6} className="text-center process-left-icon-1">
                <i className="pe-7s-angle-right" />
              </Col>
              <Col lg={6} className="text-center process-left-icon-2">
                <i className="pe-7s-angle-right" />
              </Col>
            </Row>
            <Row className="mt-5">
              <ProcessBox processes={this.state.processes} />
              <div className="text-center mx-auto">
                {/* <Link
                  to="#"
                  className="btn btn-primary waves-light waves-effect mt-5"
                >
                  Get Started <i className="mdi mdi-arrow-right"></i>
                </Link> */}
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
