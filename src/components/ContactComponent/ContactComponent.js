import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "reactstrap";
const Result = () => {
  return (
    <p>Your message has been successfully sent. We will contact you shortly</p>
  );
};

export const ContactComponent = () => {
  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmpa2w8",
        "template_1p2jnte",
        form.current,
        "bJSWFmn0jK5aVMiTh"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showResult(true);
  };

  return (
    <Col>
      <br />
      <br />
      <div className="form">
        <form ref={form} action="" onSubmit={sendEmail} name="myForm">
          <div>
            <Row>
              <Col sm={6} lg={6}>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name*"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="phone"
                      required
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </Col>
              <Col sm={6} lg={6}>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="email"
                      required
                      placeholder="Email*"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="subject"
                      required
                      placeholder="Subject*"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="submit-form">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mt-2">
                  <textarea
                    class="form-control"
                    name="comments"
                    id="comments"
                    rows="4"
                    required
                    placeholder="Message"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 text-end">
                <input
                  type="submit"
                  id="submit"
                  name="send"
                  class="submitBnt btn btn-primary"
                  value="Send Message"
                />
              </div>
            </div>
            {/* <input type="submit" value="Send" className="button" /> */}
            {/* <button>SUBMIT</button> */}

            <div className="row">
              {result ? <Result /> : null}
            </div>
          </div>
        </form>
      </div>
    </Col>
  );
};

export default ContactComponent;
