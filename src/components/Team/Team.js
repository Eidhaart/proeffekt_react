import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import TeamBox from "./TeamBox";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          image: "assets/images/team/img-1.jpg",
          title: "Jakub B",
          desc: "CEO"
        },
        {
          image: "assets/images/team/img-1.jpg",
          title: "Marcin S",
          desc: "CEO"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-4" id="team">
          <Container>
            {/* section title */}
            <SectionTitle
              title="CREW"
              desc="Proin odio mauris, facilisis eget ex in, pretium semper ipsum. Cras quis diam fermentum, viverra magna mattis, fringilla risus."
            />
            <div className="team-box1">
              <Row className="mt-5">
                {/* team box */}
                <TeamBox teams={this.state.teams} />
              </Row>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
