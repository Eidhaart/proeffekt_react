import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal

class Section extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: false
  //   };
  //   this.callModal.bind(this);
  //   this.closeModal.bind(this);
  // }

  // callModal = () => {
  //   this.setState({ isOpen: true });
  // };

  // closeModal = () => {
  //   this.setState({ isOpen: false });
  // };

  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-home home-half"
          data-image-src="images/bg-home.jpg"
          id="home-scroll"
        >
          <div className="bg-overlay" />
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8} className="text-white text-center">
                    <h1 className="home-title">Your Vision, Our Expertise</h1>
                    <p className="pt-4 mt-4 home-desc">
                      "Unmatched Skill, Great Craftsmanship, Timely Delivery and
                      Transparent Communication"
                    </p>
                    {/* <p className="play-shadow mt-4">
                      <Link
                        to="#"
                        onClick={this.callModal}
                        className="play-btn video-play-icon"
                      >
                        <i className="mdi mdi-play text-center"></i>
                      </Link>
                    </p> */}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/*  */}
          {/* Render ModalSection Component for Modal */}
          {/* <ModalSection
            channel="vimeo"
            videoId="99025203"
            closeModal={this.closeModal}
            isOpen={this.state.isOpen}
          /> */}
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
