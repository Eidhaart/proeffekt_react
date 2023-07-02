import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import TestimonialsBox from "./TestimonialsBox";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          image: "assets/images/testimonials/user-2.jpg",
          title: "RUBEN REED ",
          subTitle: "Charleston",
          desc: "review"
        },
        {
          image: "assets/images/testimonials/user-1.jpg",
          title: "MICHAEL P. HOWLETT ",
          subTitle: "Worcester",
          desc: "review"
        },
        {
          image: "assets/images/testimonials/user-3.jpg",
          title: "THERESA D. SINCLAIR",
          subTitle: "Lynchburg",
          desc: "review"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="testi">
          <Container>
            {/* section title */}
            <SectionTitle
              title="TESTIMONIALS"
              desc="Praesent placerat lectus sed risus dignissim pharetra. Suspendisse potenti. "
            />

            <Row className="mt-5">
              <TestimonialsBox clients={this.state.clients} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;
