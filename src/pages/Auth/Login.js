import React, { Component } from "react";
import { Link } from "react-router-dom";
// Formik validation
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
} from "reactstrap";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "admin@themesbrand.com",
      password: "123456"
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="/" className="text-white">
            <i className="mdi mdi-home h1"></i>
          </Link>
        </div>

        <section className="bg-account-pages vh-100">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={5}>
                    <Card className="account-card">
                      <CardBody>
                        <div className="text-center mt-3">
                          <h3 className="fw-bold">
                            <a
                              href="index.html"
                              className="text-dark text-uppercase account-pages-logo"
                            >
                              Dorsin
                            </a>
                          </h3>
                          <p className="text-muted">
                            Sign in to continue to Dorsin.
                          </p>
                        </div>
                        <div className="p-3">

                          <Formik
                            enableReinitialize={true}
                            initialValues={{
                              userName: (this.state && this.state.userName) || "",
                              password: (this.state && this.state.password) || "",
                            }}
                            validationSchema={Yup.object().shape({
                              userName: Yup.string().required("Please Enter Your User Name"),
                              password: Yup.string().required("Please Enter Your Password"),
                            })}
                            onSubmit={values => {
                              console.log(values);
                            }}
                          >
                            {({ errors, status, touched }) => (
                              <Form>
                                <div className="mb-3">
                                  <label htmlFor="userName" className="form-label">
                                    Username
                                  </label>
                                  <Field
                                    name="userName"
                                    type="userName"
                                    className={
                                      "form-control" +
                                      (errors.userName && touched.userName
                                        ? " is-invalid"
                                        : "")
                                    }
                                  />
                                  <ErrorMessage
                                    name="userName"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                  <label htmlFor="password" className="form-label">
                                    Password
                                  </label>
                                  <Field
                                    name="password"
                                    type="password"
                                    className={
                                      "form-control" +
                                      (errors.password && touched.password
                                        ? " is-invalid"
                                        : "")
                                    }
                                  />
                                  <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                  </label>
                                </div>

                                <div className="d-grid mt-3">
                                  <button type="submit" className="btn btn-primary">Log In</button>
                                </div>

                                <div className="mt-4 mb-0 text-center">
                                  <a href="password_forget.html" className="text-dark"><i
                                    className="mdi mdi-lock"></i> Forgot your password?</a>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;
