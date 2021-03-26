import React, { Component } from "react"
import PropTypes from 'prop-types'


import { Link } from "react-router-dom"

// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

import megamenuImg from "../../assets/images/megamenu-img.png"
import logo from "../../assets/images/logo-sm-light.png"
import logoLight from "../../assets/images/logo-light.png"
import logoLightSvg from "../../assets/images/logo-light.svg"
import logoDark from "../../assets/images/logo-dark.png"

// import images
import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isSearch: false }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleRightbar = this.toggleRightbar.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch })
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack()
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar()
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
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
                    <img src={logoDark} alt="" height="17" />
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

              <Dropdown
                className="dropdown-mega d-none d-lg-block ms-2"
                isOpen={this.state.megaMenuDrp}
                toggle={() => {
                  this.setState({ megaMenuDrp: !this.state.megaMenuDrp })
                }}
              >
                <DropdownToggle
                  className="btn header-item waves-effect"
                  caret
                  tag="button"
                >
                  Mega Menu
                  <i className="mdi mdi-chevron-down"/>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end dropdown-megamenu">
                  <Row>
                    <Col sm={8}>
                      <Row>
                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            UI Components
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">Lightbox</Link>
                            </li>
                            <li>
                              <Link to="#">Range Slider</Link>
                            </li>
                            <li>
                              <Link to="#">Sweet Alert</Link>
                            </li>
                            <li>
                              <Link to="#">Rating</Link>
                            </li>
                            <li>
                              <Link to="#">Forms</Link>
                            </li>
                            <li>
                              <Link to="#">Tables</Link>
                            </li>
                            <li>
                              <Link to="#">Charts</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            Applications
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">Ecommerce</Link>
                            </li>
                            <li>
                              <Link to="#">Calendar</Link>
                            </li>
                            <li>
                              <Link to="#">Email</Link>
                            </li>
                            <li>
                              <Link to="#">Projects</Link>
                            </li>
                            <li>
                              <Link to="#">Tasks</Link>
                            </li>
                            <li>
                              <Link to="#">Contacts</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            Extra Pages
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">
                                Light Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                Compact Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                Horizontal layout
                              </Link>
                            </li>
                            <li>
                              <Link to="#"> Maintenance</Link>
                            </li>
                            <li>
                              <Link to="#">Coming Soon</Link>
                            </li>
                            <li>
                              <Link to="#">Timeline</Link>
                            </li>
                            <li>
                              <Link to="#">FAQs</Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={4}>
                      <Row>
                        <Col sm={6}>
                          <h5 className="font-size-14 mt-0">
                            UI Components
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">Lightbox</Link>
                            </li>
                            <li>
                              <Link to="#">Range Slider</Link>
                            </li>
                            <li>
                              <Link to="#">Sweet Alert</Link>
                            </li>
                            <li>
                              <Link to="#">Rating</Link>
                            </li>
                            <li>
                              <Link to="#">Forms</Link>
                            </li>
                            <li>
                              <Link to="#">Tables</Link>
                            </li>
                            <li>
                              <Link to="#">Charts</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col sm={5}>
                          <div>
                            <img
                              src={megamenuImg}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </DropdownMenu>
              </Dropdown>
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

              <Dropdown
                className="d-none d-lg-inline-block ms-1"
                isOpen={this.state.socialDrp}
                toggle={() => {
                  this.setState({ socialDrp: !this.state.socialDrp })
                }}
              >
                <DropdownToggle
                  className="btn header-item noti-icon waves-effect"
                  caret
                  tag="button"
                >
                  <i className="bx bx-customize"/>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={github} alt="Github" />
                          <span>GitHub</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={bitbucket} alt="bitbucket" />
                          <span>Bitbucket</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dribbble} alt="dribbble" />
                          <span>Dribbble</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dropbox} alt="dropbox" />
                          <span>Dropbox</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={mail_chimp} alt="mail_chimp" />
                          <span>Mail Chimp</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={slack} alt="slack" />
                          <span>Slack</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  onClick={this.toggleFullscreen}
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen"/>
                </button>
              </div>

              <NotificationDropdown />

              <ProfileMenu />

              <div className="dropdown d-inline-block">
                <button
                  onClick={this.toggleRightbar}
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle waves-effect"
                >
                  <i className="bx bx-cog bx-spin"/>
                </button>
              </div>
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
  toggleRightSidebar: PropTypes.func
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}
export default Header;
