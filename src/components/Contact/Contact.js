import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ContactComponent from "../ContactComponent/ContactComponent";

//Import Section Title
import SectionTitle from "../common/section-title";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            {/* section title */}
            <SectionTitle
              title="GET IN TOUCH"
              desc="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results."
            />

            <Row>
              <Col lg={4}>
                <div className="mt-4 pt-4">
                  <p>
                    <span className="h5">Address:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      Renstiernas gata 46 A
                    </span>
                    <span className="text-muted d-block mt-2">
                      11631 Stockholm
                    </span>
                  </p>
                  {/* <p className="mt-4">
                    <span className="h5">Office Address 2:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      address <br />
                      address
                    </span>
                  </p> */}
                  <p className="mt-4">
                    <span className="h5">Working Hours:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      8:00AM To 6:00PM
                    </span>
                  </p>
                </div>
              </Col>

              <ContactComponent />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
