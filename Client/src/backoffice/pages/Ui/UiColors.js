import React, { Component } from "react"
import MetaTags from 'react-meta-tags';

import { Col, Container, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiColors extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Colors | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Colors" />

            <Row>
              <Col xl={3} md={6}>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="rounded overflow-hidden">
                      <div className="color-box bg-primary p-4">
                        <h5 className="my-2 text-white">#556ee6</h5>
                      </div>
                      <div className="color-box bg-primary bg-gradient p-4">
                        <h5 className="my-2 text-white">bg-gradient</h5>
                      </div>
                      <div className="color-box bg-primary bg-soft p-4">
                        <h5 className="my-2 text-primary">bg-soft</h5>
                      </div>
                    </div>
                    <h5 className="mb-0 mt-3 text-primary">Primary</h5>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="rounded overflow-hidden">
                      <div className="color-box bg-success p-4">
                        <h5 className="my-2 text-white">#34c38f</h5>
                      </div>
                      <div className="color-box bg-success bg-gradient p-4">
                        <h5 className="my-2 text-white">bg-gradient</h5>
                      </div>
                      <div className="color-box bg-success bg-soft p-4">
                        <h5 className="my-2 text-success">bg-soft</h5>
                      </div>
                    </div>
                    <h5 className="mb-0 mt-3 text-success">Success</h5>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="rounded overflow-hidden">
                      <div className="color-box bg-info p-4">
                        <h5 className="my-2 text-white">#50a5f1</h5>
                      </div>
                      <div className="color-box bg-info bg-gradient p-4">
                        <h5 className="my-2 text-white">bg-gradient</h5>
                      </div>
                      <div className="color-box bg-info bg-soft p-4">
                        <h5 className="my-2 text-info">bg-soft</h5>
                      </div>
                    </div>
                    <h5 className="mb-0 mt-3 text-info">Info</h5>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="rounded overflow-hidden">
                      <div className="color-box bg-warning p-4">
                        <h5 className="my-2 text-white">#f1b44c</h5>
                      </div>
                      <div className="color-box bg-warning bg-gradient p-4">
                        <h5 className="my-2 text-white">bg-gradient</h5>
                      </div>
                      <div className="color-box bg-warning bg-soft p-4">
                        <h5 className="my-2 text-warning">bg-soft</h5>
                      </div>
                    </div>
                    <h5 className="mb-0 mt-3 text-warning">Warning</h5>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xl={3} md={6}>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="rounded overflow-hidden">
                      <div className="color-box bg-danger p-4">
                        <h5 className="my-2 text-white">#f46a6a</h5>
                      </div>
                      <div className="color-box bg-danger bg-gradient p-4">
                        <h5 className="my-2 text-white">bg-gradient</h5>
                      </div>
                      <div className="color-box bg-danger bg-soft p-4">
                        <h5 className="my-2 text-danger">bg-soft</h5>
                      </div>
                    </div>
                    <h5 className="mb-0 mt-3 text-danger">Danger</h5>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="rounded overflow-hidden">
                      <div className="color-box bg-dark p-4">
                        <h5 className="my-2 text-light">#343a40</h5>
                      </div>
                      <div className="color-box bg-dark bg-gradient p-4">
                        <h5 className="my-2 text-light">bg-gradient</h5>
                      </div>
                      <div className="color-box bg-dark bg-soft p-4">
                        <h5 className="my-2 text-dark">bg-soft</h5>
                      </div>
                    </div>
                    <h5 className="mb-0 mt-3 text-dark">Dark</h5>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="rounded overflow-hidden">
                      <div className="color-box bg-secondary p-4">
                        <h5 className="my-2 text-light">#74788d</h5>
                      </div>
                      <div className="color-box bg-secondary bg-gradient p-4">
                        <h5 className="my-2 text-light">bg-gradient</h5>
                      </div>
                      <div className="color-box bg-secondary bg-soft p-4">
                        <h5 className="my-2 text-secondary">bg-soft</h5>
                      </div>
                    </div>
                    <h5 className="mb-0 mt-3 text-muted">Secondary</h5>
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

export default UiColors
