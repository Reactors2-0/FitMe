import PropTypes from "prop-types"
import React, { Component } from "react"

//Simple bar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

class SidebarContent extends Component {
  constructor(props) {
    super(props)
    this.refDiv = React.createRef()
  }

  componentDidMount() {
    this.initMenu()
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu()
    }
  }

  initMenu() {
    new MetisMenu("#side-menu")

    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
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

  // componentDidUpdate() {}

  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300
          }
        }
      }
    }, 300)
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement

    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      this.scrollElement(item)
      return false
    }
    this.scrollElement(item)
    return false
  }

  render() {
    return (
      <React.Fragment>
        <SimpleBar style={{ maxHeight: "100%" }} ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">{this.props.t("Menu")}</li>
              <li>
                <Link to="/#" className="waves-effect">
                  <i className="bx bx-home-circle" />
                  <span className="badge rounded-pill bg-info float-end">
                    04
                  </span>
                  <span>{this.props.t("Dashboards")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/dashboard">{this.props.t("Default")}</Link>
                  </li>

                </ul>
              </li>

              <li className="menu-title">{this.props.t("Apps")}</li>



              <li>
                <Link to="/chat" className=" waves-effect">
                  <i className="bx bx-chat" />
                  <span>{this.props.t("Chat")}</span>
                </Link>
              </li>


              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="bx bx-store" />
                  <span>{this.props.t("Ecommerce")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/ecommerce-products">
                      {this.props.t("Products")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-product-detail/1">
                      {this.props.t("Product Detail")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-orders">{this.props.t("Orders")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-customers">
                      {this.props.t("Customers")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-cart">{this.props.t("Cart")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-checkout">
                      {this.props.t("Checkout")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-shops">{this.props.t("Shops")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-add-product">
                      {this.props.t("Add Product")}
                    </Link>
                  </li>
                </ul>
              </li>



              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="bx bx-envelope"></i>
                  <span>{this.props.t("Email")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/email-inbox">{this.props.t("Inbox")}</Link>
                  </li>
                  <li>
                    <Link to="/email-read">{this.props.t("Read Email")} </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <span
                        className="badge rounded-pill bg-success float-end"
                        key="t-new"
                      >
                        {this.props.t("New")}
                      </span>
                      <span key="t-email-templates">
                        {this.props.t("Templates")}
                      </span>
                    </Link>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <Link to="/email-template-basic">
                          {this.props.t("Basic Action")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/email-template-alert">
                          {this.props.t("Alert Email")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/email-template-billing">
                          {this.props.t("Billing Email")}{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>



              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="bx bx-briefcase-alt-2" />
                  <span>{this.props.t("Projects")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/projects-grid">
                      {this.props.t("Projects Grid")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects-list">
                      {this.props.t("Projects List")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects-overview">
                      {this.props.t("Project Overview")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects-create">
                      {this.props.t("Create New")}
                    </Link>
                  </li>
                </ul>
              </li>



              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="bx bxs-user-detail" />
                  <span>{this.props.t("Contacts")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/contacts-grid">{this.props.t("User Grid")}</Link>
                  </li>
                  <li>
                    <Link to="/contacts-list">{this.props.t("User List")}</Link>
                  </li>
                  <li>
                    <Link to="/contacts-profile">
                      {this.props.t("Profile")}
                    </Link>
                  </li>
                </ul>
              </li>




            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    )
  }
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
  type: PropTypes.string,
}

export default withRouter(withTranslation()(SidebarContent))
