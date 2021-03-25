import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Badge, Card, CardBody, CardTitle, Input, Label, Table } from "reactstrap"

class CardTasks extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <CardTitle className="mb-4">{this.props.taskTitle}</CardTitle>
            <div className="table-responsive">
              <Table className="table-nowrap align-middle mb-0">
                <tbody>
                {this.props.data.map((task, i) => (
                  <tr key={i}>
                    <td style={{ width: "60px" }}>
                      <div className="custom-control custom-checkbox">
                        {task.isChecked ? (
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id={"customCheck" + task.id}
                            checked
                          />
                        ) : (
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id={"customCheck" + task.id}
                          />
                        )}
                        <Label
                          className="form-check-label"
                          htmlFor={"customCheck" + task.id}
                        />
                      </div>
                    </td>
                    <td>
                      <h5 className="text-truncate font-size-14 m-0">
                        <Link to="#" className="text-dark">
                          {task.title}
                        </Link>
                      </h5>
                    </td>
                    <td>
                      <div className="team">
                        {task.teamMembers.map(member =>
                          member.image !== "Null" ? (
                            <Link
                              to="#"
                              className="team-member d-inline-block"
                            >
                              <img
                                src={member.image}
                                className="rounded-circle avatar-xs m-1"
                                alt=""
                              />
                            </Link>
                          ) : (
                            <Link
                              to="#"
                              className="team-member d-inline-block"
                            >
                              <div className="avatar-xs">
                                  <span className="avatar-title rounded-circle bg-primary bg-soft text-primary">
                                    {member.imgText}
                                  </span>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Badge
                          color={task.color}
                          className={
                            "badge-soft-" + task.color + " font-size-11"
                          }
                          pill
                        >
                          {task.tastStatus}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

CardTasks.propTypes = {
  data: PropTypes.array,
  taskTitle: PropTypes.string
}

export default CardTasks
