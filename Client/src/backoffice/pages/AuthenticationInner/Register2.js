import React, { Component } from "react"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';

import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"

// import images
import logodark from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"
import CarouselPage from "./CarouselPage"

export default class Register2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
        <MetaTags>
            <title>Register 2 | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container fluid className="p-0">
            <Row className="g-0">
              <CarouselPage />

              <Col xl={3}>
                <div className="auth-full-page-content p-md-5 p-4">
                  <div className="w-100">
                    <div className="d-flex flex-column h-100">
                      <div className="mb-4 mb-md-5">
                        <Link to="dashboard" className="d-block auth-logo">
                          <img
                            src={logodark}
                            alt=""
                            height="18"
                            className="auth-logo-dark"
                          />
                          <img
                            src={logolight}
                            alt=""
                            height="18"
                            className="auth-logo-light"
                          />
                        </Link>
                      </div>
                      <div className="my-auto">
                        <div>
                          <h5 className="text-primary">Register account</h5>
                          <p className="text-muted">
                            Get your free Skote account now.
                          </p>
                        </div>

                        <div className="mt-4">
                          <Form action="dashboard" className="needs-validation">
                            <FormGroup className="mb-3">
                              <Label htmlFor="useremail" className="form-label">Email</Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="useremail"
                                placeholder="Enter email"
                              />
                            </FormGroup>

                            <FormGroup className="mb-3">
                              <Label htmlFor="username" className="form-label">Username</Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                              />
                            </FormGroup>

                            <FormGroup className="mb-3">
                              <Label htmlFor="userpassword" className="form-label">Password</Label>
                              <Input
                                type="password"
                                className="form-control"
                                id="userpassword"
                                placeholder="Enter password"
                              />
                            </FormGroup>

                            <div>
                              <p className="mb-0">
                                By registering you agree to the Skote{" "}
                                <a href="#" className="text-primary">
                                  Terms of Use
                                </a>
                              </p>
                            </div>

                            <div className="mt-4 d-grid">
                              <button
                                className="btn btn-primary btn-block waves-effect waves-light"
                                type="submit"
                              >
                                Register
                              </button>
                            </div>

                            <div className="mt-4 text-center">
                              <h5 className="font-size-14 mb-3">
                                Sign up using
                              </h5>

                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <Link
                                    to="#"
                                    className="social-list-item bg-primary text-white border-primary"
                                  >
                                    <i className="mdi mdi-facebook"></i>
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link
                                    to="#"
                                    className="social-list-item bg-info text-white border-info"
                                  >
                                    <i className="mdi mdi-twitter"></i>
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link
                                    to="#"
                                    className="social-list-item bg-danger text-white border-danger"
                                  >
                                    <i className="mdi mdi-google"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Form>

                          <div className="mt-5 text-center">
                            <p>
                              Already have an account ?{" "}
                              <Link
                                to="page-login-2"
                                className="fw-medium text-primary"
                              >
                                {" "}
                                Login
                              </Link>{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 mt-md-5 text-center">
                        <p className="mb-0">
                          ©{" "}
                          <script>
                            document.write(new Date().getFullYear())
                          </script>{" "}
                          Skote. Crafted with{" "}
                          <i className="mdi mdi-heart text-danger"></i> by
                          Themesbrand
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}
