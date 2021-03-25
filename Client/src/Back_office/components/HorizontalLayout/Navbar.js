import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let matchingMenuItem = null
    const ul = document.getElementById("navigation")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <div className="container-fluid">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ isDashboard: !this.state.isDashboard })
                      }}
                      to="dashboard"
                    >
                      <i className="bx bx-home-circle me-2" />
                      {this.props.t("Dashboard")} {this.props.menuOpen}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.isDashboard,
                      })}
                    >
                      <Link to="dashboard" className="dropdown-item">
                        {this.props.t("Default")}
                      </Link>

                    </div>
                  </li>



                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ appState: !this.state.appState })
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="bx bx-customize me-2" />
                      {this.props.t("Apps")} <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.appState,
                      })}
                    >

                      <Link to="chat" className="dropdown-item">
                        {this.props.t("Chat")}
                      </Link>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              emailState: !this.state.emailState,
                            })
                          }}
                        >
                          {this.props.t("Email")} <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.emailState,
                          })}
                        >
                          <Link to="email-inbox" className="dropdown-item">
                            {this.props.t("Inbox")}
                          </Link>
                          <Link to="email-read" className="dropdown-item">
                            {this.props.t("Read Email")}
                          </Link>
                          <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                            e.preventDefault()
                            this.setState({
                              emailState: !this.state.emailState,
                            })
                          }}
                          >
                            <span key="t-email-templates">Templates</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: this.state.emailState,
                            })}
                          >
                            <Link
                              to="email-template-basic"
                              className="dropdown-item"
                            >
                              {this.props.t("Basic Action")}
                            </Link>
                            <Link
                              to="email-template-alert"
                              className="dropdown-item"
                            >
                              {this.props.t("Alert Email")}
                            </Link>
                            <Link
                              to="email-template-billing"
                              className="dropdown-item"
                            >
                              {this.props.t("Billing Email")}
                            </Link>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              ecommerceState: !this.state.ecommerceState,
                            })
                          }}
                        >
                          {this.props.t(" Ecommerce")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.ecommerceState,
                          })}
                        >
                          <Link
                            to="ecommerce-products"
                            className="dropdown-item"
                          >
                            {this.props.t("Products")}
                          </Link>
                          <Link
                            to="ecommerce-product-detail/1"
                            className="dropdown-item"
                          >
                            {this.props.t("Product Detail")}
                          </Link>
                          <Link to="ecommerce-orders" className="dropdown-item">
                            {this.props.t("Orders")}
                          </Link>
                          <Link
                            to="ecommerce-customers"
                            className="dropdown-item"
                          >
                            {this.props.t("Customers")}
                          </Link>
                          <Link to="ecommerce-cart" className="dropdown-item">
                            {this.props.t("Cart")}
                          </Link>
                          <Link
                            to="ecommerce-checkout"
                            className="dropdown-item"
                          >
                            {this.props.t("Checkout")}
                          </Link>
                          <Link to="ecommerce-shops" className="dropdown-item">
                            {this.props.t("Shops")}
                          </Link>
                          <Link
                            to="ecommerce-add-product"
                            className="dropdown-item"
                          >
                            {this.props.t("Add Product")}
                          </Link>
                        </div>
                      </div>



                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              projectState: !this.state.projectState,
                            })
                          }}
                        >
                          {this.props.t("Projects")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.projectState,
                          })}
                        >
                          <Link to="projects-grid" className="dropdown-item">
                            {this.props.t("Projects Grid")}
                          </Link>
                          <Link to="projects-list" className="dropdown-item">
                            {this.props.t("Projects List")}
                          </Link>
                          <Link
                            to="projects-overview"
                            className="dropdown-item"
                          >
                            {this.props.t("Project Overview")}
                          </Link>
                          <Link to="projects-create" className="dropdown-item">
                            {this.props.t("Create New")}
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              contactState: !this.state.contactState,
                            })
                          }}
                        >
                          {this.props.t("Contacts")}{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.contactState,
                          })}
                        >
                          <Link to="contacts-grid" className="dropdown-item">
                            {this.props.t("User Grid")}
                          </Link>
                          <Link to="contacts-list" className="dropdown-item">
                            {this.props.t("User List")}
                          </Link>
                          <Link to="contacts-profile" className="dropdown-item">
                            {this.props.t("Profile")}
                          </Link>
                        </div>
                      </div>

                    </div>
                  </li>




                </ul>
              </Collapse>
            </nav>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  location: PropTypes.object,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(Navbar))
