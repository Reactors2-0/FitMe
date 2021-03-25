import React, { Component } from "react"
import {
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"

class RenderCardTitle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <UncontrolledDropdown className="float-right">
          <DropdownToggle href="#" className="arrow-none" tag="i">
            <i className="mdi mdi-dots-vertical m-0 text-muted h5"/>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="#">Edit</DropdownItem>
            <DropdownItem href="#">Delete</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <CardTitle className="mb-4">{this.props.title}</CardTitle>
      </React.Fragment>
    )
  }
}

export default RenderCardTitle
