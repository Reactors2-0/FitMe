import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Progress,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class FormWizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1,
      activeTabVartical: 1,
    }
    this.toggleTab.bind(this)
    this.toggleTabVertical.bind(this)
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        this.setState({
          activeTab: tab,
        })
      }
    }
  }

  toggleTabVertical(tab) {
    if (this.state.activesTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        this.setState({
          activeTabVartical: tab,
        })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Form Wizard | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Basic Wizard</h4>
                    <div className="wizard clearfix">
                      <div className="steps clearfix">
                        <ul>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 1,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === 1,
                              })}
                              onClick={() => {
                                this.toggleTab(1)
                              }}
                            >
                              <span className="number">1.</span>{" "}
                            Seller Details
                          </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 2,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === 2,
                              })}
                              onClick={() => {
                                this.toggleTab(2)
                              }}
                            >
                              <span className="number">2.</span>{" "}
                              <span>Company Document</span>
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 3,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === 3,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTab(3)
                              }}
                            >
                              <span className="number">3.</span>{" "}
                            Bank Details
                          </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTab === 4,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === 4,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTab(4)
                              }}
                            >
                              <span className="number">4.</span>{" "}
                            Confirm Detail
                          </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix">
                        <TabContent
                          activeTab={this.state.activeTab}
                          className="body"
                        >
                          <TabPane tabId={1}>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-firstname-input1">
                                      First name
                                  </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-lastname-input2">
                                      Last name
                                  </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-phoneno-input3">
                                      Phone
                                  </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-email-input4">
                                      Email
                                  </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-address-input1">
                                      Address
                                  </Label>
                                    <textarea
                                      className="form-control"
                                      rows="2"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </TabPane>
                          <TabPane tabId={2}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-pancard-input5">
                                        PAN Card
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-vatno-input6">
                                        VAT/TIN No.
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-cstno-input7">
                                        CST No.
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-servicetax-input8">
                                        Service Tax No.
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-companyuin-input9">
                                        Company UIN
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-declaration-input11">
                                        Declaration
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-namecard-input11">
                                        Name on Card
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label>Credit Card Type</Label>
                                      <select className="form-select">
                                        <option>
                                          Select Card Type
                                      </option>
                                        <option>
                                          American Express
                                      </option>
                                        <option>Visa</option>
                                        <option>MasterCard</option>
                                        <option>Discover</option>
                                      </select>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-cardno-input12">
                                        Credit Card Number
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-card-verification-input">
                                        Card Verification Number
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-expiration-input13">
                                        Expiration Date
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <div className="row justify-content-center">
                              <Col lg="6">
                                <div className="text-center">
                                  <div className="mb-4">
                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                  </div>
                                  <div>
                                    <h5>Confirm Detail</h5>
                                    <p className="text-muted">
                                      If several languages coalesce, the grammar
                                      of the resulting
                                  </p>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                      <div className="actions clearfix">
                        <ul>
                          <li
                            className={
                              this.state.activeTab === 1
                                ? "previous disabled"
                                : "previous"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTab(this.state.activeTab - 1)
                              }}
                            >
                              Previous
                          </Link>
                          </li>
                          <li
                            className={
                              this.state.activeTab === 4
                                ? "next disabled"
                                : "next"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTab(this.state.activeTab + 1)
                              }}
                            >
                              Next
                          </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>


              <Col lg="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Vertical Wizard</h4>
                    <div className="vertical-wizard wizard clearfix vertical">
                      <div className="steps clearfix">
                        <ul>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 1,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTabVartical === 1,
                              })}
                              onClick={() => {
                                this.toggleTabVertical(1)
                              }}
                            >
                              <span className="number">1.</span>{" "}
                            Seller Details
                          </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 2,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTabVartical === 2,
                              })}
                              onClick={() => {
                                this.toggleTabVertical(2)
                              }}
                            >
                              <span className="number">2.</span>{" "}
                              <span>Company Document</span>
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 3,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTabVartical === 3,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTabVertical(3)
                              }}
                            >
                              <span className="number">3.</span>{" "}
                            Bank Details
                          </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({
                              current: this.state.activeTabVartical === 4,
                            })}>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTabVartical === 4,
                              }), 'done'}
                              onClick={() => {
                                this.toggleTabVertical(4)
                              }}
                            >
                              <span className="number">4.</span>{" "}
                            Confirm Detail
                          </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix">
                        <TabContent
                          activeTab={this.state.activeTabVartical}
                          className="body"
                        >
                          <TabPane tabId={1}>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-firstname-input1">
                                      First name
                                  </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-lastname-input2">
                                      Last name
                                  </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-phoneno-input3">
                                      Phone
                                  </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-email-input4">
                                      Email
                                  </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-address-input1">
                                      Address
                                  </Label>
                                    <textarea
                                      className="form-control"
                                      rows="2"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </TabPane>
                          <TabPane tabId={2}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-pancard-input5">
                                        PAN Card
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-vatno-input6">
                                        VAT/TIN No.
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-cstno-input7">
                                        CST No.
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-servicetax-input8">
                                        Service Tax No.
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-companyuin-input9">
                                        Company UIN
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-declaration-input10">
                                        Declaration
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-namecard-input11">
                                        Name on Card
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label>Credit Card Type</Label>
                                      <select className="form-select">
                                        <option>
                                          Select Card Type
                                      </option>
                                        <option>
                                          American Express
                                      </option>
                                        <option>Visa</option>
                                        <option>MasterCard</option>
                                        <option>Discover</option>
                                      </select>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-cardno-input12">
                                        Credit Card Number
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-card-verification-input">
                                        Card Verification Number
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup className="mb-3">
                                      <Label htmlFor="basicpill-expiration-input13">
                                        Expiration Date
                                    </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <div className="row justify-content-center">
                              <Col lg="6">
                                <div className="text-center">
                                  <div className="mb-4">
                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                  </div>
                                  <div>
                                    <h5>Confirm Detail</h5>
                                    <p className="text-muted">
                                      If several languages coalesce, the grammar
                                      of the resulting
                                  </p>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                      <div className="actions clearfix">
                        <ul>
                          <li
                            className={
                              this.state.activeTabVartical === 1
                                ? "previous disabled"
                                : "previous"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTabVertical(this.state.activeTabVartical - 1)
                              }}
                            >
                              Previous
                          </Link>
                          </li>
                          <li
                            className={
                              this.state.activeTabVartical === 4
                                ? "next disabled"
                                : "next"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                this.toggleTabVertical(this.state.activeTabVartical + 1)
                              }}
                            >
                              Next
                          </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default FormWizard
