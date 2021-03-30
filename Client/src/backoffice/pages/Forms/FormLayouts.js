import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class FormLayouts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Form Layouts | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="Forms" breadcrumbItem="Form Layouts" />
            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-4">Form Grid Layout</CardTitle>

                    <Form>
                      <FormGroup className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">First name</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                        />
                      </FormGroup>

                      <Row>
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="formrow-email-Input">Email</Label>
                            <Input
                              type="email"
                              className="form-control"
                              id="formrow-email-Input"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="formrow-password-Input">Password</Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="formrow-password-Input"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={4}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="formrow-InputCity">City</Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="formrow-InputCity"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg={4}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="formrow-InputState">State</Label>
                            <Input
                              id="formrow-InputState"
                              className="form-control"
                              type="select"
                            >
                              <option>Choose...</option>
                              <option>...</option>
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col lg={4}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="formrow-InputZip">Zip</Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="formrow-InputZip"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <FormGroup className="mb-3">
                        <div className="form-check">
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id="formrow-customCheck"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="formrow-customCheck"
                          >{" "}
                            Check me out
                          </Label>
                        </div>
                      </FormGroup>
                      <div>
                        <button type="submit" className="btn btn-primary w-md">
                          Submit
                        </button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-4">
                      Horizontal form layout
                    </CardTitle>

                    <Form>
                      <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-firstname-Input"
                          className="col-sm-3 col-form-label"
                        >
                          First name
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            className="form-control"
                            id="horizontal-firstname-Input"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-email-Input"
                          className="col-sm-3 col-form-label"
                        >
                          Email
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="email"
                            className="form-control"
                            id="horizontal-email-Input"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-password-Input"
                          className="col-sm-3 col-form-label"
                        >
                          Password
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="password"
                            className="form-control"
                            id="horizontal-password-Input"
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup className="row justify-content-end">
                        <Col sm={9}>
                          <div className="form-check mb-4">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="horizontal-customCheck"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="horizontal-customCheck"
                            >
                              Remember me
                            </Label>
                          </div>

                          <div>
                            <Button
                              type="submit"
                              color="primary"
                              className="w-md"
                            >
                              Submit
                            </Button>
                          </div>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* end row  */}
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-4">Auto Sizing</CardTitle>

                    <Form className="row gy-2 gx-3 align-items-center">
                      <div className="col-sm-auto">
                        <Label className="visually-hidden" htmlFor="autoSizingInput">Name</Label>
                        <Input type="text" className="form-control" id="autoSizingInput" placeholder="Jane Doe" />
                      </div>
                      <div className="col-sm-auto">
                        <Label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</Label>
                        <InputGroup className="me-sm-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" className="form-control" placeholder="Username" />
                        </InputGroup>
                      </div>
                      <div className="col-sm-auto">
                        <Label className="visually-hidden" htmlFor="autoSizingSelect">Preference</Label>
                        <Input type="select" className="form-select" id="autoSizingSelect">
                          <option defaultValue>Choose...</option>
                          <option>One</option>
                          <option>Two</option>
                          <option>Three</option>
                        </Input>
                      </div>
                      <div className="col-sm-auto">
                        <div className="form-check">
                          <Input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                          <Label className="form-check-label" htmlFor="autoSizingCheck">
                            Remember me
                                                    </Label>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <Button type="submit" color="primary" className="w-md">Submit</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <CardTitle className="h5 mb-4">Inline forms</CardTitle>
                    <Form className="row row-cols-lg-auto g-3 align-items-center">
                      <div className="col-12">
                        <Label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" className="form-control" placeholder="Username" />
                        </InputGroup>
                      </div>

                      <div className="col-12">
                        <Label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</Label>
                        <Input type="select" className="form-select" id="inlineFormSelectPref">
                          <option defaultValue>Choose...</option>
                          <option>One</option>
                          <option>Two</option>
                          <option>Three</option>
                        </Input>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <Input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                          <Label className="form-check-label" htmlFor="inlineFormCheck">
                            Remember me</Label>
                        </div>
                      </div>

                      <div className="col-12">
                        <Button type="submit" color="primary" className="w-md">Submit</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl="6">
                <Card>
                  <CardBody>
                    <CardTitle className="h5">Floating labels
                    </CardTitle>
                    <p className="card-title-desc">Create beautifully simple form labels that float over your input fields.</p>
                    <Form>
                      <div className="form-floating mb-3">
                        <Input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                        <Label htmlFor="floatingnameInput">Name</Label>
                      </div>
                      <Row>
                        <Col mg={6}>
                          <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingemailInput" placeholder="Enter Email address" />
                            <Label htmlFor="floatingemailInput">Email address</Label>
                          </div>
                        </Col>
                        <Col mg={6}>
                          <div className="form-floating mb-3">
                            <Input type="select" className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                              <option defaultValue>Open this select menu</option>
                              <option>One</option>
                              <option>Two</option>
                              <option>Three</option>
                            </Input>
                            <Label htmlFor="floatingSelectGrid">Works with selects</Label>
                          </div>
                        </Col>
                      </Row>

                      <div className="mb-3">
                        <div className="form-check">
                          <Input className="form-check-input" type="checkbox" id="floatingCheck" />
                          <Label className="form-check-label" htmlFor="floatingCheck">
                            Check me out</Label>
                        </div>
                      </div>
                      <div>
                        <Button type="submit" color="primary" className="w-md">Submit</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* container-fluid */}
        </div>
      </React.Fragment>
    )
  }
}

export default FormLayouts
