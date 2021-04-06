import React, { Component } from "react"
import PropTypes from "prop-types"

//i18n
import SidebarContent from "./SidebarContent"

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            <SidebarContent />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

export default Sidebar
