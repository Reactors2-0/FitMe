import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Image
import images from "../../assets/images"
import companies from "../../assets/images/companies"

import { getProjects } from "../../store/projects/actions"

class ProjectsList extends Component {
  componentDidMount() {
    const { onGetProjects } = this.props
    onGetProjects()
  }

  render() {
    const { projects } = this.props
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Projects List | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Projects" breadcrumbItem="Projects List" />

            <Row>
              <Col lg="12">
                <div className="">
                  <div className="table-responsive" >
                    <Table className="project-list-table table-nowrap align-middle table-borderless">
                      <thead>
                        <tr>
                          <th scope="col" style={{ width: "100px" }}>
                            #
                          </th>
                          <th scope="col">Projects</th>
                          <th scope="col">Due Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Team</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {map(projects, (project, index) => (
                          <tr key={index}>
                            <td>
                              <img
                                src={companies[project.img]}
                                alt=""
                                className="avatar-sm"
                              />
                            </td>
                            <td>
                              <h5 className="text-truncate font-size-14">
                                <Link
                                  to={`/projects-overview/${project.id}`}
                                  className="text-dark"
                                >
                                  {project.name}
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">
                                {project.description}
                              </p>
                            </td>
                            <td>{project.dueDate}</td>
                            <td>
                              <Badge color={project.color} className={"bg-" + project.color}>
                                {project.status}
                              </Badge>
                            </td>
                            <td>
                              <div className="avatar-group">
                                {map(project.team, (member, index) =>
                                  !member.img || member.img !== "Null" ? (
                                    <div className="avatar-group-item" key={index}>
                                      <Link
                                        to="#"
                                        className="d-inline-block"
                                        id={"member" + member.id}
                                      >
                                        <img
                                          src={images[member.img]}
                                          className="rounded-circle avatar-xs"
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                  ) : (
                                      <Link
                                        to="#"
                                        className="d-inline-block"
                                        id={"member" + member.id}
                                        key={"_team_" + index}
                                      >
                                        <div className="avatar-xs">
                                          <span
                                            className={
                                              "avatar-title rounded-circle bg-" +
                                              member.color +
                                              " text-white font-size-16"
                                            }
                                          >
                                            {member.name}
                                          </span>
                                        </div>
                                      </Link>
                                    )
                                )}
                              </div>
                            </td>
                            <td>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  href="#"
                                  className="card-drop"
                                  tag="i"
                                >
                                  <i className="mdi mdi-dots-horizontal font-size-18" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">
                                    Another action
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Something else here
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <div className="text-center my-3">
                  <Link to="#" className="text-success">
                    <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                    Load more
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.array,
  onGetProjects: PropTypes.func,
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
})

const mapDispatchToProps = dispatch => ({
  onGetProjects: () => dispatch(getProjects()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsList))
