import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
// import images
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import { Link } from "react-router-dom"

import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class UiImages extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Images | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Images" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Image Rounded & Circle</CardTitle>
                    <p className="card-title-desc">
                      Use className <code>.rounded</code> and{" "}
                      <code>.rounded-circle</code>.
                    </p>
                    <Row>
                      <Col md={6}>
                        <img
                          className="rounded me-2"
                          alt="Skote"
                          width="200"
                          src={img4}
                        />
                      </Col>
                      <Col md={6}>
                        <div className="mt-4 mt-md-0">
                          <img
                            className="rounded-circle avatar-xl"
                            alt="Skote"
                            src={avatar4}
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Image thumbnails</CardTitle>
                    <p className="card-title-desc">
                      In addition to our border-radius utilities, you can use{" "}
                      <code className="highlighter-rouge">.img-thumbnail</code>{" "}
                      to give an image a rounded 1px border appearance.
                    </p>
                    <Row>
                      <Col md={6}>
                        <img
                          className="img-thumbnail"
                          alt="Skote"
                          width="200"
                          src={img3}
                        />
                      </Col>
                      <Col md={6}>
                        <div className="mt-4 mt-md-0">
                          <img
                            className="img-thumbnail rounded-circle avatar-xl"
                            alt="Skote"
                            src={avatar3}
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Responsive images</CardTitle>
                    <p className="card-title-desc">
                      Images in Bootstrap are made responsive with{" "}
                      <code className="highlighter-rouge">.img-fluid</code>.{" "}
                      <code className="highlighter-rouge">
                        max-width: 100%;
                      </code>{" "}
                      and{" "}
                      <code className="highlighter-rouge">height: auto;</code>{" "}
                      are applied to the image so that it scales with the parent
                      element.
                    </p>
                    <div className="">
                      <CardImg className="img-fluid" src={img2} alt="Responsive image" />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-4">Image Sizes</CardTitle>
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col lg={4}>
                            <CardImg
                              src={avatar3}
                              alt="SkoteSkote"
                              className="rounded avatar-sm"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-sm</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={avatar4}
                              alt="Skote"
                              className="rounded avatar-md"
                            />
                            <CardText className="mt-2  mb-lg-0">
                              <code>.avatar-md</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={avatar5}
                              alt="Skote"
                              className="rounded avatar-lg"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-lg</code>
                            </CardText>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col lg={4}>
                            <CardImg
                              src={avatar3}
                              alt="Skote"
                              className="rounded-circle avatar-sm"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-sm</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={avatar4}
                              alt=""
                              className="rounded-circle avatar-md"
                            />
                            <CardText className="mt-2  mb-lg-0">
                              <code>.avatar-md</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={avatar5}
                              alt="Skote"
                              className="rounded-circle avatar-lg"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-lg</code>
                            </CardText>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default UiImages
