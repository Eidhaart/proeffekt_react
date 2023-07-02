import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services1: [
        {
          icon: "pe-7s-diamond",
          title: "Service 1",
          desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
          icon: "pe-7s-display2",
          title: "Service 2",
          desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
          icon: "pe-7s-piggy",
          title: "Service 3",
          desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. "
        }
      ],
      services2: [
        {
          icon: "pe-7s-science",
          title: "Service 4",
          desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
          icon: "pe-7s-news-paper",
          title: "Service 5",
          desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
          icon: "pe-7s-plane",
          title: "Service 6",
          desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. "
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Dolor Amet"
              desc="Sit dolor amet, Lorem ipsum."
            />

            <Row className="mt-4">
              {/* services box */}
              <ServiceBox services={this.state.services1} />
            </Row>

            <Row className="mt-4">
              {/* service box */}
              <ServiceBox services={this.state.services2} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
