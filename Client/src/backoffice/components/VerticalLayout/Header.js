import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import { Link } from "react-router-dom"

// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"


import logo from "./../../assets/images/logo-sm-light.png"
import logoLight from "../../assets/images/logo-light.png"
import logoLightSvg from "../../assets/images/logo-light.svg"
import logoDark from "../../assets/images/logo-dark.png"


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isSearch: false }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch })
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback()
  }


  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="70" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="19" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-toggle="collapse"
                onClick={this.toggleMenu}
                data-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars"/>
              </button>

              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"/>
                </div>
              </form>


            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch })
                  }}
                >
                  <i className="mdi mdi-magnify"/>
                </button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..." 
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <ProfileMenu />
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  openLeftMenuCallBack: PropTypes.func,
  t: PropTypes.any,
}


export default connect()(
    (Header)
)

Header.propTypes = {
  t: PropTypes.any,
  toggleMenuCallback: PropTypes.any,
  toggleRightSidebar: PropTypes.func
}
