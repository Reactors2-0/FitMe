import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import { Container, Row, Col, CardBody } from "reactstrap"

//Import Cards
import CardMaintenance from "./card-maintenance"

//Import Images
import maintenance from "../../assets/images/maintenance.svg"
import logo from "../../assets/images/logo-dark.png"
import lightlogo from "../../assets/images/logo-light.png"

class PagesMaintenance extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="my-5 pt-sm-5">
        <MetaTags>
            <title>Maintenance | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container>
            <Row>
              <Col xs="12" className="text-center">
                <div className="home-wrapper">
                  <div className="mb-5">
                  <Link to="/dashboard" className="d-block auth-logo">
                    <img src={logo} alt="logo" height="20" className="auth-logo-dark mx-auto" />
                    <img src={lightlogo} alt="logo" height="20" className="auth-logo-light mx-auto" />
                    </Link>
                  </div>

                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="maintenance-img">
                        <img
                          src={maintenance}
                          alt=""
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </Col>
                  </Row>
                  <h3 className="mt-5">Site is Under Maintenance</h3>
                  <p>Please check back in sometime.</p>

                  <Row>
                    <CardMaintenance className="mt-4 maintenance-box">
                      <i className="bx bx-broadcast mb-4 h1 text-primary" />
                      <h5 className="font-size-15 text-uppercase">
                        Why is the Site Down?
                      </h5>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </CardMaintenance>
                    <CardMaintenance className="mt-4 maintenance-box">
                      <i className="bx bx-time-five mb-4 h1 text-primary" />
                      <h5 className="font-size-15 text-uppercase">
                        What is the Downtime?
                      </h5>
                      <p className="text-muted mb-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classNameical.
                      </p>
                    </CardMaintenance>
                    <CardMaintenance className="mt-4 maintenance-box">
                      <i className="bx bx-envelope mb-4 h1 text-primary" />
                      <h5 className="font-size-15 text-uppercase">
                        Do you need Support?
                      </h5>
                      <p className="text-muted mb-0">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn&#39;t anything embar..
                        <Link
                          to="mailto:no-reply@domain.com"
                          className="text-decoration-underline"
                        >
                          no-reply@domain.com
                        </Link>
                      </p>
                    </CardMaintenance>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default PagesMaintenance
